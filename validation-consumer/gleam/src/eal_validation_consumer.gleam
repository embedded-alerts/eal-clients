import eal_validation
import gleam/dynamic.{type Dynamic}

pub fn validate_request_meta(value: Dynamic) { eal_validation.decode_request_meta(value) }
