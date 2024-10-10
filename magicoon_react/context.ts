import { createContext } from 'react'

export interface MagicoonContextProps {
  variant?: 'filled' | 'regular'
  filled?: boolean
  className?: string
}

export const MagicoonContext = createContext<MagicoonContextProps>({})
