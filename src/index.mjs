export const product = Object.freeze({
  org: "embedded-alerts",
  name: "Embedded Alerts",
  slug: "embedded-alerts",
  audience: "embedded engineers, IoT operators, hardware startups, safety systems, vehicle telemetry teams, and industrial monitoring groups",
  capabilities: ['health', 'config', 'events', 'leads', 'alerts'],
});

// Only HTTP delta-seconds are supported: date-form Retry-After values are
// deliberately ignored until the caller supplies a clock for safe evaluation.
// Exposing the bounded hint does not cause automatic request replay.
export function parseRetryAfterSeconds(value) {
  if (typeof value !== 'string') return null;
  const raw = value.trim();
  if (!/^\d+$/.test(raw)) return null;
  // Rust's contract parses u64 values exactly, then caps the policy delay.
  // BigInt prevents rounding and a false rejection above MAX_SAFE_INTEGER.
  const digits = raw.replace(/^0+(?=\d)/, '');
  if (digits.length > 20) return null;
  const seconds = BigInt(digits);
  if (seconds > 18446744073709551615n) return null;
  return Number(seconds > 3600n ? 3600n : seconds);
}

export class ApiError extends Error {
  constructor(message, { status, body, retryAfterSeconds = null } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export class ServiceClient {
  constructor({ baseUrl, token, fetchImpl = globalThis.fetch } = {}) {
    if (typeof baseUrl !== 'string' || !baseUrl) throw new TypeError('baseUrl is required');
    if (typeof fetchImpl !== 'function') throw new TypeError('fetch implementation is required');
    let parsedBase;
    try {
      parsedBase = new URL(baseUrl);
    } catch {
      throw new TypeError('baseUrl must be an absolute HTTP(S) URL');
    }
    if (!['http:', 'https:'].includes(parsedBase.protocol) ||
        !parsedBase.hostname || parsedBase.username || parsedBase.password ||
        parsedBase.search || parsedBase.hash ||
        parsedBase.href.includes('?') || parsedBase.href.includes('#')) {
      throw new TypeError('baseUrl must use HTTP(S) with no credentials, query or fragment');
    }
    this.baseUrl = parsedBase.toString().replace(/\/$/, '');
    this.token = token;
    this.fetch = fetchImpl;
  }
  health() { return this.request('/healthz'); }
  ready() { return this.request('/readyz'); }
  config() { return this.request('/api/config'); }
  emitEvent(payload) { return this.request('/api/events', { method: 'POST', body: payload }); }
  createLead(payload) { return this.request('/api/leads', { method: 'POST', body: payload }); }
  createAlert(payload) { return this.request('/api/alerts', { method: 'POST', body: payload }); }
  async request(path, { method = 'GET', headers = {}, body } = {}) {
    const requestHeaders = new Headers(headers);
    requestHeaders.set('accept', 'application/json');
    if (this.token) requestHeaders.set('authorization', `Bearer ${this.token}`);
    const init = { method, headers: requestHeaders };
    if (body !== undefined) {
      requestHeaders.set('content-type', 'application/json');
      init.body = JSON.stringify(body);
    }
    const res = await this.fetch(`${this.baseUrl}${path}`, init);
    const text = await res.text();
    let parsed = null;
    if (text) {
      try {
        parsed = JSON.parse(text);
      } catch {
        if (res.ok) {
          throw new ApiError('Response body is not valid JSON', { status: res.status });
        }
        // Non-JSON 429/5xx bodies must not obscure the HTTP status or retry hint.
      }
    }
    if (!res.ok) {
      throw new ApiError(`Request failed: ${res.status}`, {
        status: res.status,
        body: parsed,
        retryAfterSeconds: parseRetryAfterSeconds(res.headers.get('retry-after')),
      });
    }
    return parsed;
  }
}

export function createClient(config) { return new ServiceClient(config); }
