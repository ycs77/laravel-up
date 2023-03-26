let base_url_temp = ''
try {
  if (process) {
    base_url_temp = process.env.BASE_URL || ''
  }
} catch (e) {}
try {
  if (location) {
    base_url_temp = location.origin || ''
  }
} catch (e) {}
export const base_url = base_url_temp
