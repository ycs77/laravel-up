import { response, versionToBranch } from '@/logic/versionRange'

export default defineEventHandler(event => {
  return response(event, ({ startTag, endTag }) =>
`# Commit upgrade change...
git commit -m "Upgrade Laravel ${versionToBranch(startTag)} to ${versionToBranch(endTag)}"

# Clear...
git branch -D laravel-upgrading-with-bash
git tag -d $(git tag -l)
git remote remove laravel
git fsck --unreachable
git gc --prune=now
git fsck`
  )
})
