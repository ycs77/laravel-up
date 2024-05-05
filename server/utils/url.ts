import type { H3Event } from 'h3'

export function urlFromRequest(event: H3Event) {
  const config = useRuntimeConfig()
  const url = event.node.req.url!.replace(/\/\d$/, '')
  const base = config.public.baseUrl

  return new URL(url, base).toString()
}
