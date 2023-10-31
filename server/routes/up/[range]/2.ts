export default defineEventHandler(event => {
  return versionResponse(event, () =>
`# Insert Laravel commits...
git commit -m "patch"
git checkout $(git config --global init.defaultBranch)
git cherry-pick $(git log --pretty=format:"%h" laravel-upgrading-with-bash^..laravel-upgrading-with-bash)

${colorCodes()}

echo ''
echo -e "\${GREEN}*** Manually resolve merge conflicts ***\${NC}"
echo ''
echo 'Once resolved conflicts run command to commit upgrade changes:'
echo ''
echo '  curl -s "${urlFromRequest(event)}/3" | bash'`
  )
})
