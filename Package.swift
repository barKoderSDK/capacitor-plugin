// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "BarkoderCapacitor",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "BarkoderCapacitor",
            targets: ["BarkoderPlugin"]
        )
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "BarkoderPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                "Barkoder",
                "BarkoderSDK"
            ],
            path: "ios/Sources/BarkoderPlugin"
        ),
        .binaryTarget(
            name: "Barkoder",
            path: "ios/Frameworks/Barkoder.xcframework"
        ),
        .binaryTarget(
            name: "BarkoderSDK",
            path: "ios/Frameworks/BarkoderSDK.xcframework"
        ),
        .testTarget(
            name: "BarkoderPluginTests",
            dependencies: ["BarkoderPlugin"],
            path: "ios/Tests/BarkoderPluginTests"
        )
    ]
)
