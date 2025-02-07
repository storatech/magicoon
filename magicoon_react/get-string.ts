import codePoints, { type IconKey, type IconVariant } from './codepoints'

/**
 * @deprecated Switching to new icon system as of February 2025
 */
export const getValue = (variant: IconVariant, icon: IconKey): string => {
  const codePoint = codePoints[variant][icon]

  if (codePoint === undefined || codePoint === null || isNaN(codePoint)) return ''

  return String.fromCodePoint(codePoint)
}
