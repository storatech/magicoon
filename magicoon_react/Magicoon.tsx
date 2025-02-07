import React, { FunctionComponent, useContext } from 'react'
import { MagicoonProps } from './types'
import { getValue } from './get-string'
import { MagicoonContext } from './context'

/**
 * @deprecated Switching to new icon system as of February 2025
 */
const MagicoonComponent: FunctionComponent<MagicoonProps> = ({ css, variant: propVariant, filled: propFilled, icon, className }) => {
  const contextProps = useContext(MagicoonContext)

  const variant = propVariant ?? contextProps.variant ?? ((propFilled ?? contextProps.filled ?? false) ? 'filled' : 'regular')

  const value = getValue(variant, icon)

  return (
    <span style={css} data-stora-icon data-magicoon aria-hidden='true' data-magicoon-variant={variant} className={[className ?? '', contextProps.className ?? ''].join(' ')}>
      {value}
    </span>
  )
}

/**
 * @deprecated Switching to new icon system as of February 2025
 */
export const Magicoon = Object.assign(MagicoonComponent, {
  Context: MagicoonContext,
  displayName: 'Magicoon'
})
