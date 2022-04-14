import { response } from '@/logic/versionRange'
import { urlFromRequest } from '@/logic/url'

export default defineEventHandler(event => {
  return response(event, ({ startTag, endTag }) =>
`# Make Laravel commits...
git remote add laravel https://github.com/laravel/laravel.git
git fetch laravel
git checkout ${startTag}
git checkout -b laravel-upgrading-with-bash
git merge --squash -Xtheirs --no-commit ${endTag}
git restore --staged README.md CHANGELOG.md .styleci.yml .github/*
git checkout -- README.md CHANGELOG.md .styleci.yml
git clean -df

# Insert Laravel commits...
git commit -m "patch"
git checkout $(git config --global init.defaultBranch)
git cherry-pick $(git log --pretty=format:"%h" laravel-upgrading-with-bash^..laravel-upgrading-with-bash)

GREEN='\\033[0;36m'
WHITE='\\033[1;37m'
NC='\\033[0m'

echo ''
echo -e "\${GREEN}*** Manually resolve merge conflicts ***\${NC}"
echo ''
echo 'Once resolved run:'
echo ''
echo '  curl -s "${urlFromRequest(event)}/2" | bash'`
  )
})
