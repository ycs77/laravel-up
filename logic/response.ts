import type { CompatibilityEvent } from 'h3'

export function errorResponse(event: CompatibilityEvent, code: number, message: string) {
  event.res.statusCode = code

  return { message }
}
