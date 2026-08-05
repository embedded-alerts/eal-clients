package io.embeddedalerts.client

data class ClientRequest(
    val method: String,
    val url: String,
    val headers: Map<String, String>,
    val body: String? = null,
)

data class ClientResponse(
    val status: Int,
    val headers: Map<String, String>,
    val body: String?,
)

fun interface Transport {
    suspend fun execute(request: ClientRequest): ClientResponse
}

class EmbeddedAlertsClient(
    baseUrl: String,
    private val token: String? = null,
    private val headers: Map<String, String> = emptyMap(),
    private val transport: Transport,
) {
    private val baseUrl = baseUrl.trimEnd('/')

    suspend fun request(
        method: String,
        path: String,
        body: String? = null,
    ): ClientResponse {
        val requestHeaders = buildMap {
            put("Accept", "application/json")
            putAll(headers)
            token?.let { putIfAbsent("Authorization", "Bearer $it") }
            if (body != null) putIfAbsent("Content-Type", "application/json")
        }

        return transport.execute(
            ClientRequest(
                method = method.uppercase(),
                url = "$baseUrl/${path.trimStart('/')}",
                headers = requestHeaders,
                body = body,
            ),
        )
    }
}
