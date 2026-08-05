plugins {
    kotlin("jvm") version "1.9.24"
}

group = "io.github.embeddedalerts"
version = "0.1.0"

repositories { mavenCentral() }
kotlin { jvmToolchain(17) }
