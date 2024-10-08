mkdir fonts
rm fonts/*

# node gen classes <json-defs> <fontName> <packageName> <className> <outputFile>

fantasticon ./icons/filled -o fonts -t ttf -g json -n "Magicoon-filled" --normalize
node gen-dart-classes "fonts/Magicoon-filled.json" "Magicoon Filled" "magicoon_flutter" "MagicoonFilled" "fonts/magicoon_filled.dart"

fantasticon ./icons/regular -o fonts -t ttf -g json -n "Magicoon-regular" --normalize
node gen-dart-classes "fonts/Magicoon-regular.json" "Magicoon Regular" "magicoon_flutter" "MagicoonRegular" "fonts/magicoon_regular.dart"

cp -r fonts/*.ttf ../fonts/icons/
cp -r fonts/*.ttf ./magicoon_flutter/fonts/
mv fonts/*.dart ./magicoon_flutter/lib/src/

# node gen-ts-obj <variantCount> <variantJson : 0> <variantName : 0> <variantJson : 1> <variantName : 1> ... <outputFile>
node gen-ts-obj 2 "./fonts/Magicoon-filled.json" "filled" "./fonts/Magicoon-regular.json" "regular" "./magicoon_react/codepoints.ts"

node update-ver

cd magicoon_flutter

cd ../magicoon_react
npm install
npm run build