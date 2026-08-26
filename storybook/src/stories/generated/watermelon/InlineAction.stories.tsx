/**
 * Action | A value is edited where it sits, so the user never leaves the context to change it.
 *
 * **Registry:** Watermelon UI — `@watermelon/inline-action` ([docs](https://ui.watermelon.sh/animated-components/inline-action))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineAction } from '@/registries/watermelon/components/ui/inline-action'

const meta: Meta<typeof InlineAction> = {
  title: 'Watermelon UI/Inline Action',
  component: InlineAction,
  tags: ['autodocs'],
  args: {
    label: "Registry component",
    icon: "Sample",
    actionText: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof InlineAction>

export const Default: Story = {}
