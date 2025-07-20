# cookbook.ts

My TypeScript scripts using only built-in Node.js APIs.

## Features

- ✅ **Native TypeScript support** - Uses Node.js `--experimental-strip-types` (no compilation needed)
- ✅ **Absolutely zero dependencies** - No dependencies or devDependencies at all
- ✅ **pnpm package manager** - Fast, efficient dependency management
- ✅ **TDD approach** - Test-driven development with Node.js built-in test runner
- ✅ **No build step** - TypeScript runs directly without compilation
- ✅ **Built-in types** - Node.js provides built-in TypeScript type definitions

## Finansavisen News CLI

Fetches top news from finansavisen.no using only built-in Node.js APIs.

### Usage

```bash
pnpm finansavisen
```

### Testing

```bash
pnpm test
```

## Requirements

- Node.js v22.6.0+ (for experimental TypeScript support)
- pnpm
