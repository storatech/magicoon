import React, { FunctionComponent } from "react";
import { MagicoonProps } from "./types";
import { IconKey, IconVariant, codePoints } from "./codepoints";
import { getValue } from "./get-string";
import styles from "./styles";

const MagicoonFilled: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("filled", icon);

  return (
    <span style={styles.filled} className={className}>
      {value}
    </span>
  );
};
const MagicoonRegular: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("regular", icon);

  return (
    <span style={styles.regular} className={className}>
      {value}
    </span>
  );
};
const MagicoonLight: FunctionComponent<Omit<MagicoonProps, "variant">> = ({ icon, className }) => {
  const value = getValue("light", icon);

  return (
    <span style={styles.light} className={className}>
      {value}
    </span>
  );
};

const Magicoon: FunctionComponent<MagicoonProps> = ({ variant, icon, className }) => {
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
