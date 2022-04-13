import { errorResponse } from '@/logic/response'
import type { CompatibilityEvent } from 'h3'

export interface RangeContext {
  startTag: string
  endTag: string
}

export function response(event: CompatibilityEvent, content: (range: RangeContext) => string) {
  const range = event.context.params.range.split('...') as string[]

  if (range.length !== 2) {
    return errorResponse('Range is incorrect.')
  }

  const [startTag, endTag] = range

  // if (startTag is invalid) {
  //   return errorResponse('`startTag` is invalid.')
  // }
  // if (endTag is invalid) {
  //   return errorResponse('`endTag` is invalid.')
  // }

  event.res.setHeader('Content-Type', 'text/plain; charset=UTF-8')

  return content({ startTag, endTag })
}
