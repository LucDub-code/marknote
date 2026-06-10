export const formatFileName = (input: string): string => {
  const safe = input
    .replace(/\s+/g, '')
    .replace(/\.md$/i, '')
    .replace(/[/\\:*?"<>|]/g, '-')

  const name = /[^-]/.test(safe) ? safe : 'sans-titre'

  return `${name}.md`
}