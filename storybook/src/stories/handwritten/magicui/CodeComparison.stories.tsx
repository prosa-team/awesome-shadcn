import type { Meta, StoryObj } from '@storybook/react-vite'

import { CodeComparison } from '@/registries/magicui/ui/code-comparison'

const BEFORE = `const items = []
for (const registry of registries) {
  for (const item of registry.items) {
    if (item.installable) {
      items.push(item)
    }
  }
}`

const AFTER = `const items = registries.flatMap((registry) =>
  registry.items.filter((item) => item.installable)
)`

/**
 * A before-and-after pair of highlighted code panes.
 *
 * **Registry:** Magic UI — `@magicui/code-comparison`
 * ([docs](https://magicui.design/docs/components/code-comparison))
 *
 * `lightTheme` and `darkTheme` are Shiki theme names, not colours. A value
 * Shiki does not ship throws at highlight time, which is what a generated
 * sample string does.
 */
const meta: Meta<typeof CodeComparison> = {
  title: 'Magic UI/Code Comparison',
  component: CodeComparison,
  tags: ['autodocs'],
  args: {
    beforeCode: BEFORE,
    afterCode: AFTER,
    language: 'typescript',
    filename: 'collect-items.ts',
    lightTheme: 'github-light',
    darkTheme: 'github-dark',
  },
  render: (args) => (
    <div className="w-[46rem] max-w-full">
      <CodeComparison {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof CodeComparison>

/** The intended pitch shape: verbose on the left, the tool's output on the right. */
export const Default: Story = {}

/** A different theme pair — any name Shiki ships is valid. */
export const VitesseThemes: Story = {
  args: { lightTheme: 'vitesse-light', darkTheme: 'vitesse-dark' },
}

/** A highlight colour to mark the changed region. */
export const Highlighted: Story = { args: { highlightColor: 'rgba(101, 117, 133, 0.16)' } }
