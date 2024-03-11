import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    unocss: true,
  },
  ...compat.config({
    overrides: [
      {
        files: ['**/*.{ts,tsx}'],
        parser: '@typescript-eslint/parser',
        plugins: ['solid'],
        extends: ['plugin:solid/typescript'],
      },
    ],
  }),
)
