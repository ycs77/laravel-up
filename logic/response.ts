import type { CompatibilityEvent } from 'h3'

export function errorResponse(message: string) {
  return `RED='\\033[0;31m'
NC='\\033[0m'

echo ''
echo -e "\${RED}error\${NC} ${message}"`
}
