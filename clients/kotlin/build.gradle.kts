plugins {
    kotlin("multiplatform") version "2.0.21"
    id("com.android.library") version "8.7.3"
}

group = "io.embeddedalerts"
version = "0.1.0"

kotlin {
    androidTarget()
    jvm()
    iosArm64()
    iosSimulatorArm64()

    sourceSets {
        commonMain.dependencies {}
        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}

android {
    namespace = "io.embeddedalerts.client"
    compileSdk = 35

    defaultConfig {
        minSdk = 24
    }
}
