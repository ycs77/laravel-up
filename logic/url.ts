import type { H3Event } from 'h3'

let base_url_temp = ''
try {
  if (process) {
    base_url_temp = process.env.BASE_URL || ''
  }
} catch (e) {}
try {
  if (location) {
    base_url_temp = location.origin || ''
  }
} catch (e) {}
export const base_url = base_url_temp

export function urlFromRequest(event: H3Event) {
  return new URL(event.node.req.url!, base_url).toString()
}
