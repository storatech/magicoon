import React, { FunctionComponent } from "react";
import { MagicoonProps } from "./types";
import { getValue } from "./get-string";

export const MagicoonFilled: FunctionComponent<Omit<MagicoonProps, "variant" | "filled"> & { filled: true }> = ({ icon, className }) => {
  const value = getValue("filled", icon);

  return (
    <span data-stora-icon data-magicoon aria-hidden="true" data-magicoon-variant="filled" className={className}>
      {value}
    </span>
  );
};
export const MagicoonRegular: FunctionComponent<Omit<MagicoonProps, "variant" | "filled"> & { filled: false }> = ({ icon, className }) => {
  const value = getValue("regular", icon);

  return (
    <span data-stora-icon data-magicoon aria-hidden="true" data-magicoon-variant="regular" className={className}>
      {value}
    </span>
  );
};

/**
 * Make sure you import `@storatech/magicoon/dist/style.css`
 */
export const Magicoon: FunctionComponent<MagicoonProps> = ({ variant = "regular", filled = false, icon, className }) => {
  if (filled || variant === "filled") {
    return <MagicoonFilled icon={icon} className={className} filled />;
  }

  return <MagicoonRegular icon={icon} className={className} filled={false} />;
};

Magicoon.displayName = 'Magicoon'