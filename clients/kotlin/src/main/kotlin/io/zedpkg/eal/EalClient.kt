package io.zedpkg.eal
import java.net.URI
data class EalClient(val baseUri: URI, val bearerToken: String? = null)
