import assert from 'node:assert/strict';
import test from 'node:test';
import { createClient, product, ApiError, parseRetryAfterSeconds } from '../src/index.mjs';

test('product metadata is exported', () => {
  assert.equal(product.slug, "embedded-alerts");
  assert.ok(product.capabilities.includes('events'));
});

test('client serializes JSON and auth headers', async () => {
  const calls = [];
  const client = createClient({ baseUrl: 'https://edge.example.test/', token: 'test-token', fetchImpl: async (url, init) => { calls.push({ url, init }); return new Response(JSON.stringify({ ok: true, url }), { status: 200 }); } });
  const result = await client.emitEvent({ type: 'demo' });
  assert.equal(result.ok, true);
  assert.equal(calls[0].url, 'https://edge.example.test/api/events');
  assert.equal(calls[0].init.headers.get('authorization'), 'Bearer test-token');
});

test('client throws structured errors', async () => {
  const client = createClient({ baseUrl: 'https://edge.example.test', fetchImpl: async () => new Response(JSON.stringify({ error: 'nope' }), { status: 418 }) });
  await assert.rejects(() => client.health(), ApiError);
});


test('retry-after delta-seconds are bounded and invalid hints ignored', () => {
  assert.equal(parseRetryAfterSeconds('12'), 12);
  assert.equal(parseRetryAfterSeconds(' 999999 '), 3600);
  for (const invalid of [null, '-1', '1.5', '5s', 'Wed, 21 Oct 2015 07:28:00 GMT', '99999999999999999999999']) {
    assert.equal(parseRetryAfterSeconds(invalid), null);
  }
});

test('429 errors expose retry delay without automatically retrying POST', async () => {
  let calls = 0;
  const client = createClient({
    baseUrl: 'https://edge.example.test',
    fetchImpl: async () => {
      calls += 1;
      return new Response(JSON.stringify({ error: 'rate_limited' }), {
        status: 429,
        headers: { 'retry-after': '90' },
      });
    },
  });
  await assert.rejects(() => client.emitEvent({ type: 'demo' }), (error) => {
    assert(error instanceof ApiError);
    assert.equal(error.status, 429);
    assert.equal(error.retryAfterSeconds, 90);
    return true;
  });
  assert.equal(calls, 1);
});
