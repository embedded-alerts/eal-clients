// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "EALClient",
    platforms: [
        .iOS(.v15),
        .macOS(.v12),
        .tvOS(.v15),
        .watchOS(.v8),
    ],
    products: [
        .library(name: "EALClient", targets: ["EALClient"]),
    ],
    targets: [
        .target(name: "EALClient"),
        .testTarget(name: "EALClientTests", dependencies: ["EALClient"]),
    ]
)
