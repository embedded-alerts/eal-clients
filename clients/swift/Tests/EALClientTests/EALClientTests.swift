import XCTest
@testable import EALClient

final class EALClientTests: XCTestCase {
    func testBaseURLIsRetained() throws {
        let url = try XCTUnwrap(URL(string: "https://example.invalid"))
        XCTAssertEqual(EmbeddedAlertsClient(baseURL: url).baseURL, url)
    }
}
