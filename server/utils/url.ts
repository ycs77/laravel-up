import type { H3Event } from 'h3'

export function urlFromRequest(event: H3Event) {
  const config = useRuntimeConfig()

  return new URL(event.node.req.url!, config.public.baseUrl).toString()
}
