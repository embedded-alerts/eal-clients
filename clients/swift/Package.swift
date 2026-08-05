// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "EalClient",
    platforms: [.macOS(.v12), .iOS(.v15)],
    products: [.library(name: "EalClient", targets: ["EalClient"])],
    targets: [
        .target(name: "EalClient"),
        .testTarget(name: "EalClientTests", dependencies: ["EalClient"])
    ]
)
