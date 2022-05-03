import fs from 'fs'
import axios from 'axios'
import semverLte from 'semver/functions/lte.js'

interface GitTag {
  ref: string
  node_id: string
  url: string
  object: {
    sha: string
    type: string
    url: string
  }
}

const { data } = await axios.get<GitTag[]>('https://api.github.com/repos/laravel/laravel/git/refs/tags')

const tags = data
  .map(tagObj => tagObj.ref.replace('refs/tags/', ''))
  .filter(tag => semverLte('v5.0.0', tag))
  .reverse()

fs.writeFileSync('data/tags.json', JSON.stringify(tags), { encoding: 'utf-8' })
