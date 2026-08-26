/**
 * A conversation surface built from the same system as the rest of the app, instead of an imported chat kit.
 *
 * **Registry:** Fluid Functionalism — `@fluid/chat-message` ([docs](https://www.fluidfunctionalism.com/docs/chat-message))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ChatMessage } from '@/registries/fluid/ui/chat-message'

const meta: Meta<typeof ChatMessage> = {
  title: 'Fluid Functionalism/ChatMessage',
  component: ChatMessage,
  tags: ['autodocs'],
  args: {
    from: "user",
  },
}

export default meta
type Story = StoryObj<typeof ChatMessage>

export const Default: Story = {}
