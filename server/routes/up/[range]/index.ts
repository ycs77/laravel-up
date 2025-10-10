export default defineEventHandler(event => {
  return versionResponse(event, ({ startTag, endTag }) =>
`${colorCodes()}

echo ''
echo ''
echo -e "    \${RED} _                              _ \${NC}  _   _       "
echo -e "    \${RED}| |    __ _ _ __ __ ___   _____| |\${NC} | | | |_ __  "
echo -e "    \${RED}| |   / _\\\` | '__/ _\\\` \\ \\ / / _ \\ |\${NC} | | | | '_ \\ "
echo -e "    \${RED}| |__| (_| | | | (_| |\\ V /  __/ |\${NC} | |_| | |_) |"
echo -e "    \${RED}|_____\\__,_|_|  \\__,_| \\_/ \\___|_|\${NC}  \\___/| .__/ "
echo -e "                                             |_|    "
echo ''
echo -e "\${GRAY}Upgrade your Laravel application from Laravel source git repository.\${NC}"
echo ''
echo ''
echo -e "\${RED}[This operation is destructive, please proceed with caution]\${NC}"
echo 'Before running the upgrade commands, please clone your Laravel project '
echo 'to a new directory to avoid affecting your original project.'
echo 'Run the following commands in the new project directory!'
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
