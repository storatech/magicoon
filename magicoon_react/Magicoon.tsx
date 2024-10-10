import React, { FunctionComponent, useContext } from 'react'
import { MagicoonProps } from './types'
import { getValue } from './get-string'
import { MagicoonContext } from './context'

const MagicoonComponent: FunctionComponent<MagicoonProps> = ({ variant: propVariant, filled: propFilled, icon, className }) => {
  const contextProps = useContext(MagicoonContext)

  const variant = propVariant ?? contextProps.variant ?? ((propFilled ?? contextProps.filled ?? false) ? 'filled' : 'regular')

  const value = getValue(variant, icon)

  return (
    <span data-stora-icon data-magicoon aria-hidden='true' data-magicoon-variant={variant} className={[className ?? '', contextProps.className ?? ''].join(' ')}>
      {value}
    </span>
  )
}

export const Magicoon = Object.assign(MagicoonComponent, {
  Context: MagicoonContext,
  displayName: 'Magicoon'
})
