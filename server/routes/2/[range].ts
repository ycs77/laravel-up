import { response } from '@/logic/versionRange'

export default defineEventHandler((event) => {
  return response(event, () => `git commit -m "Upgrade Laravel 8.x to 9.x"

# Clear
git branch -D laravel-upgrading-with-bash
git tag -d $(git tag -l)
git remote remove laravel
git fsck --unreachable
git gc --prune=now
git fsck`
  )
})
