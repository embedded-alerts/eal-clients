// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "EalClient",
    platforms: [.iOS(.v15), .macOS(.v12)],
    products: [.library(name: "EalClient", targets: ["EalClient"])],
    targets: [.target(name: "EalClient")]
)
