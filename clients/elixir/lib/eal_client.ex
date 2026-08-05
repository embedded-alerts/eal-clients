defmodule EalClient do
  @moduledoc "Runtime-light Embedded Alerts client using OTP's built-in :httpc."

  defstruct [:base_url, :token, headers: []]

  def new(base_url, opts \\ []) do
    %__MODULE__{
      base_url: String.trim_trailing(base_url, "/"),
      token: Keyword.get(opts, :token),
      headers: Keyword.get(opts, :headers, [])
    }
  end

  def request(%__MODULE__{} = client, method, path, body \\ nil) do
    :inets.start()
    :ssl.start()

    headers =
      [{"accept", "application/json"} | client.headers]
      |> maybe_authorize(client.token)
      |> Enum.map(fn {key, value} -> {to_charlist(key), to_charlist(value)} end)

    url = to_charlist(client.base_url <> "/" <> String.trim_leading(path, "/"))

    request =
      if is_nil(body) do
        {url, headers}
      else
        {url, headers, ~c"application/json", IO.iodata_to_binary(body)}
      end

    :httpc.request(method, request, [], body_format: :binary)
  end

  defp maybe_authorize(headers, nil), do: headers
  defp maybe_authorize(headers, token), do: [{"authorization", "Bearer " <> token} | headers]
end
