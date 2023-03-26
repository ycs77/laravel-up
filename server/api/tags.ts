import semverMajor from 'semver/functions/major.js'
import tags from '@/data/tags.json'

export default defineEventHandler(event => {
  const latestTag = tags[0]

  function defaultStartTag() {
    const latestTagMajor = semverMajor(latestTag)
    const version =
      tags.includes(`v${latestTagMajor - 1}.0.0`) ? `v${latestTagMajor - 1}.0.0` :
      tags.includes(`v${latestTagMajor}.0.0`) ? `v${latestTagMajor}.0.0` :
      latestTag
    return version
  }

  return {
    tags,
    startTag: defaultStartTag(),
    endTag: latestTag,
  }
})
