import { IconKey, IconVariant } from './codepoints'

export interface MagicoonProps {
  icon: IconKey
  variant?: IconVariant
  filled?: boolean
  className?: string
  css?: React.CSSProperties
}
