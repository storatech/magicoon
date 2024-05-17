import codePoints, { type IconKey, type IconVariant } from "./codepoints";

export const getValue = (variant: IconVariant, icon: IconKey): string => {

  const codePoint = codePoints[variant][icon ]

  if (!codePoint || isNaN(codePoint)) return "";

  return String.fromCodePoint(codePoint);
};
