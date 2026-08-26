/**
 * You need a "someone is typing" indicator for chat or collaborative UIs.
 *
 * **Registry:** interior.dev — `@interior/typing-indicator` ([docs](https://interior.dev/docs/typing-indicator))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TypingIndicator } from '@/registries/interior/components/interior/typing-indicator'

const meta: Meta<typeof TypingIndicator> = {
  title: 'interior.dev/Typing Indicator',
  component: TypingIndicator,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TypingIndicator>

export const Default: Story = {}
