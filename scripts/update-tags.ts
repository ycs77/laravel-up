import fs from 'fs'
import axios from 'axios'
import semverLte from 'semver/functions/lte.js'

const { data } = await axios.get('https://api.github.com/repos/laravel/laravel/git/refs/tags')

const tags = data
  .map(tag => tag.ref.replace('refs/tags/', ''))
  .filter(tag => semverLte('v5.0.0', tag))
  .reverse()

fs.writeFileSync('data/tags.json', JSON.stringify(tags), { encoding: 'utf-8' })
