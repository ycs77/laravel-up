import { errorResponse } from '@/logic/response'
import semverValid from 'semver/functions/valid'
import semverMajor from 'semver/functions/major'
import semverMinor from 'semver/functions/minor'
import type { CompatibilityEvent } from 'h3'

export interface RangeContext {
  startTag: string
  endTag: string
}

export function versionToBranch(version: string): string {
  const major = semverMajor(version)
  const minor = major >= 6 ? 'x' : semverMinor(version)
  return `${major}.${minor}`
}

export function response(event: CompatibilityEvent, content: (range: RangeContext) => string) {
  const range = event.context.params.range.split('...') as string[]

  if (range.length !== 2) {
    return errorResponse(event, 400, 'Range is incorrect.')
  }

  const [startTag, endTag] = range

  if (!semverValid(startTag)) {
    return errorResponse(event, 400, 'startTag is invalid.')
  }
  if (!semverValid(endTag)) {
    return errorResponse(event, 400, 'endTag is invalid.')
  }

  event.res.setHeader('Content-Type', 'text/plain; charset=UTF-8')

  return content({ startTag, endTag })
}
