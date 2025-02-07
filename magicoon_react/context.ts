import { createContext } from 'react'

/**
 * @deprecated Switching to new icon system as of February 2025
 */
export interface MagicoonContextProps {
  variant?: 'filled' | 'regular'
  filled?: boolean
  className?: string
}

/**
 * @deprecated Switching to new icon system as of February 2025
 */
export const MagicoonContext = createContext<MagicoonContextProps>({})
