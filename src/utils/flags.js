export function countryToEmoji(cc) {
  if (!cc) return ''
  const OFFSET = 127397
  return cc
    .toUpperCase()
    .split('')
    .map(c => String.fromCodePoint(c.charCodeAt(0) + OFFSET))
    .join('')
}
