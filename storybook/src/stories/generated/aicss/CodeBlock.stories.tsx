/**
 * Agent output is code the user will copy — filename header, highlighting, copy button, no accidental markdown mangling.
 *
 * **Registry:** AICSS — `@aicss/code-block` ([docs](https://www.aicss.dev/components/code-block))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CodeBlock } from '@/registries/aicss/CodeBlock'

const meta: Meta<typeof CodeBlock> = {
  title: 'AICSS/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  args: {
    lang: "tsx",
    code: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof CodeBlock>

export const Default: Story = {}
