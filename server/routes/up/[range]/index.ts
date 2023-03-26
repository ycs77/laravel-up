export default defineEventHandler(event => {
  return versionResponse(event, ({ startTag, endTag }) =>
`# Pull Laravel commits...
git remote add laravel https://github.com/laravel/laravel.git
git fetch laravel
git checkout ${startTag}
git checkout -b laravel-upgrading-with-bash
git merge --squash -Xtheirs --no-commit ${endTag}
git restore --staged README.md CHANGELOG.md .styleci.yml .github/*
git checkout -- README.md CHANGELOG.md .styleci.yml
git clean -df

GREEN='\\033[0;36m'
WHITE='\\033[1;37m'
NC='\\033[0m'

echo ''
echo -e "\${GREEN}*** Confirm upgrade changes ***\${NC}"
echo ''
echo 'Once confirmed complete run command to commit upgrade changes:'
echo ''
echo '  curl -s "${urlFromRequest(event)}/2" | bash'`
  )
})
