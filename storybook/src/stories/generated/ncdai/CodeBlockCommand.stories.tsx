/**
 * Docs show an install snippet across npm, pnpm, yarn, and bun, and the package-manager tabs plus copy button should already work.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/code-block-command` ([docs](https://chanhdai.com/components/code-block-command))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CodeBlockCommand } from '@/registries/ncdai/code-block-command'

const meta: Meta<typeof CodeBlockCommand> = {
  title: 'Chánh Đại Components/Code Block Command',
  component: CodeBlockCommand,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CodeBlockCommand>

export const Default: Story = {}
