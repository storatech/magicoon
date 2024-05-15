# Stora Magicoon icons

## Prerequisites

- Node (and npm)
- Fantasticon

## Install

Fantasticon

```bash
npm install -g fantasticon
```

## Generate

```bash
mkdir fonts
fantasticon ./icons/filled -o fonts -t ttf -g '' -n "Magicoon-filled"
fantasticon ./icons/regular -o fonts -t ttf -g '' -n "Magicoon-regular"
fantasticon ./icons/outline -o fonts -t ttf -g '' -n "Magicoon-outline"
```

## Dart source generation utils

`node gen-classes <json-defs> <fontName> <className> <outputFile>`
