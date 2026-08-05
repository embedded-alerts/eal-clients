#ifndef EAL_CLIENT_H
#define EAL_CLIENT_H

#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef struct eal_client {
  const char *base_url;
  const char *token;
} eal_client;

int eal_client_endpoint(const eal_client *client, const char *path,
                        char *output, size_t output_size);

#ifdef __cplusplus
}
#endif

#endif
