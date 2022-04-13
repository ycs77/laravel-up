import { response } from '@/logic/versionRange'

export default defineEventHandler((event) => {
  return response(event, ({ startTag, endTag }) => `# Make Laravel commits
git remote add laravel https://github.com/laravel/laravel.git
git fetch laravel
git checkout ${startTag}
git checkout -b laravel-upgrading-with-bash
git merge --squash -Xtheirs --no-commit ${endTag}
git restore --staged README.md CHANGELOG.md .styleci.yml .github/*
git checkout -- README.md CHANGELOG.md .styleci.yml
git clean -df

# Insert Laravel commits
git commit -m "patch"
git checkout $(git config --global init.defaultBranch)
git cherry-pick $(git log --pretty=format:"%h" laravel-upgrading-with-bash^..laravel-upgrading-with-bash)

echo "*** manually and resolve merge conflicts ***"`
  )
})
