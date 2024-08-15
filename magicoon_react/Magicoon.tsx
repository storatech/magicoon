import React, { FunctionComponent } from "react";
import { MagicoonProps } from "./types";
import { getValue } from "./get-string";

const MagicoonFilled: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("filled", icon);

  return (
    <span data-magicoon data-magicoon-variant="filled" className={className}>
      {value}
    </span>
  );
};
const MagicoonRegular: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("regular", icon);

  return (
    <span data-magicoon data-magicoon-variant="regular" className={className}>
      {value}
    </span>
  );
};
const MagicoonLight: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("light", icon);

  return (
    <span data-magicoon data-magicoon-variant="light" className={className}>
      {value}
    </span>
  );
};

const Magicoon: FunctionComponent<MagicoonProps> = ({ variant = "regular", icon, className }) => {
  switch (variant) {
    case "filled":
      return <MagicoonFilled icon={icon} className={className} />;
    case "light":
      return <MagicoonLight icon={icon} className={className} />;
    default:
      return <MagicoonRegular icon={icon} className={className} />;
  }
};

export default Magicoon;
