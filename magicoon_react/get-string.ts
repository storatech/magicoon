import codePoints, { type IconKey, type IconVariant } from "./codepoints";


export const getValue = <T extends IconVariant>(variant: T, icon: IconKey): string => {
  type IconVariantKey = keyof typeof codePoints[T]

  const codePoint = codePoints[variant][icon as unknown as IconVariantKey] as number;

  if (!codePoint || isNaN(codePoint)) return "";

  return String.fromCodePoint(codePoint);
};
