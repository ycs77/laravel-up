export default defineEventHandler(event => {
  return versionResponse(event, ({ startTag, endTag }) =>
`# Commit upgrade change when git is merging...
if [ -f .git/MERGE_HEAD ] || [ -f .git/MERGE_MSG ]; then
  git commit -m "Upgrade Laravel ${versionToBranch(startTag)} to ${versionToBranch(endTag)}"
fi

# Clear...
git branch -D laravel-upgrading-with-bash
git tag -d $(git tag -l)
git remote remove laravel
git fsck --unreachable
git gc --prune=now
git fsck`
  )
})
