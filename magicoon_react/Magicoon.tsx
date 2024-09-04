import React, { FunctionComponent } from "react";
import { MagicoonProps } from "./types";
import { getValue } from "./get-string";

export const MagicoonFilled: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("filled", icon);

  return (
    <span data-stora-icon data-magicoon data-magicoon-variant="filled" className={className}>
      {value}
    </span>
  );
};
export const MagicoonRegular: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("regular", icon);

  return (
    <span data-stora-icon data-magicoon data-magicoon-variant="regular" className={className}>
      {value}
    </span>
  );
};

/**
 * Make sure you import `@storatech/magicoon/dist/style.css`
 */
export const Magicoon: FunctionComponent<MagicoonProps> = ({ variant = "regular", icon, className }) => {
  switch (variant) {
    case "filled":
      return <MagicoonFilled icon={icon} className={className} />;
    default:
      return <MagicoonRegular icon={icon} className={className} />;
  }
};

