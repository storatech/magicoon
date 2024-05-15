import React from "react";
import { IconVariant } from "./codepoints";

const defaultStyle = {
  fontFamily: "Magicoon Regular",
  fontSize: "24px",
  display: "inline-block",
  verticalAlign: "middle",
  lineHeight: "1",
  whiteSpace: "nowrap",
};

const filledStyle = {
  ...defaultStyle,
  fontFamily: "Magicoon Filled",
};

const lightStyle = {
  ...defaultStyle,
  fontFamily: "Magicoon Light",
};

type Styles = Record<IconVariant, React.CSSProperties>;

const styles: Styles = {
  filled: filledStyle,
  light: lightStyle,
  regular: defaultStyle,
};

export default styles;
