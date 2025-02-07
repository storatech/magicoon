import { IconKey, IconVariant } from './codepoints'

/**
 * @deprecated Switching to new icon system as of February 2025
 */
export interface MagicoonProps {
  icon: IconKey
  variant?: IconVariant
  filled?: boolean
  className?: string
  css?: React.CSSProperties
}
