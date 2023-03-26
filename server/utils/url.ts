import type { H3Event } from 'h3'
import { base_url } from '@/utils/url'

export function urlFromRequest(event: H3Event) {
  return new URL(event.node.req.url!, base_url).toString()
}
