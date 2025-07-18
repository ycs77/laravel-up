export default defineEventHandler(event => {
  return versionResponse(event, ({ startTag, endTag }) =>
`${colorCodes()}

echo ''
echo ''
echo -e "                               \${RED}Laravel Up\${NC}"
echo ''
echo -e "  \${GRAY}Upgrade your Laravel application from Laravel source git repository.\${NC}"
echo ''
echo ''
echo -e "\${RED}[This operation is destructive, please proceed with caution]\${NC}"
echo 'Please backup your git repository before executing this script'
echo 'and clone the new repository to executing this script.'
echo ''

printf 'Is your git repository now ready to execute (y/N)? '
set +e
read yn < /dev/tty
rc=$?
set -e
if [ $rc -ne 0 ]; then
  exit 1
fi
if [ "$yn" != "y" ] && [ "$yn" != "yes" ]; then
  exit 1
fi

# Pull Laravel commits...
git remote add laravel https://github.com/laravel/laravel.git
git fetch laravel
git checkout ${startTag}
git checkout -b laravel-upgrading-with-bash
git merge --squash -Xtheirs --no-commit ${endTag}
git restore --staged README.md CHANGELOG.md .styleci.yml .github/*
git checkout -- README.md CHANGELOG.md .styleci.yml .github/*
git clean -df

echo ''
echo ''
echo -e "\${GREEN}*** Confirm upgrade changes ***\${NC}"
echo ''
echo 'Once confirmed complete run command to commit upgrade changes:'
echo ''
echo '  curl -s "${getRequestURL(event).href.replace(/\/\d$/, '')}/2" | bash'`
  )
})
