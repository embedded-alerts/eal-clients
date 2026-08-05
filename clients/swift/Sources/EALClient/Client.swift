import Foundation

public struct EmbeddedAlertsClient: Sendable {
    public let baseURL: URL
    public let token: String?
    public let headers: [String: String]

    public init(baseURL: URL, token: String? = nil, headers: [String: String] = [:]) {
        self.baseURL = baseURL
        self.token = token
        self.headers = headers
    }

    public func request<T: Decodable>(
        _ type: T.Type,
        method: String,
        path: String,
        body: Data? = nil,
        session: URLSession = .shared
    ) async throws -> T {
        let url = baseURL.appending(path: path.trimmingCharacters(in: CharacterSet(charactersIn: "/")))
        var request = URLRequest(url: url)
        request.httpMethod = method.uppercased()
        request.httpBody = body
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        headers.forEach { request.setValue($1, forHTTPHeaderField: $0) }
        if let token, request.value(forHTTPHeaderField: "Authorization") == nil {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        if body != nil && request.value(forHTTPHeaderField: "Content-Type") == nil {
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        }

        let (data, response) = try await session.data(for: request)
        guard let http = response as? HTTPURLResponse, (200..<300).contains(http.statusCode) else {
            throw URLError(.badServerResponse)
        }
        return try JSONDecoder().decode(type, from: data)
    }
}
