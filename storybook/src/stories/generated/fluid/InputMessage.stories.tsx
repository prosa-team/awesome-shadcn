/**
 * A chat composer with send and attachments, matching the rest of the system's motion.
 *
 * **Registry:** Fluid Functionalism — `@fluid/input-message` ([docs](https://www.fluidfunctionalism.com/docs/input-message))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputMessage } from '@/registries/fluid/ui/input-message'

const meta: Meta<typeof InputMessage> = {
  title: 'Fluid Functionalism/InputMessage',
  component: InputMessage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputMessage>

export const Default: Story = {}
