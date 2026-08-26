/**
 * Dialog | One dialog opens another and the stack must stay legible instead of covering itself.
 *
 * **Registry:** Watermelon UI — `@watermelon/dialog-stack` ([docs](https://ui.watermelon.sh/animated-components/dialog-stack))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DialogStack } from '@/registries/watermelon/components/ui/dialog-stack'

const meta: Meta<typeof DialogStack> = {
  title: 'Watermelon UI/Dialog Stack',
  component: DialogStack,
  tags: ['autodocs'],
  args: {
    stack: [{ id: "item-1", title: "Registry component", type: "form" }, { id: "item-1 2", title: "Registry component 2", type: "form" }, { id: "item-1 3", title: "Registry component 3", type: "form" }],
  },
}

export default meta
type Story = StoryObj<typeof DialogStack>

export const Default: Story = {}
