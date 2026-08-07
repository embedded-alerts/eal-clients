package io.zedpkg.eal;
import java.net.URI;
public record EalClient(URI baseUri, String bearerToken) {}
