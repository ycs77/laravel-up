import type { CompatibilityEvent } from 'h3'

export function urlFromRequest(event: CompatibilityEvent) {
  return `${new URL(event.req.url, `${(event.req.connection as { encrypted?: boolean }).encrypted ? 'https' : 'http'}://${event.req.headers.host}`)}`
}