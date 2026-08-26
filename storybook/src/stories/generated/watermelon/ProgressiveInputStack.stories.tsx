/**
 * Widgets | Form fields appear as earlier ones are completed, so a long form never looks long.
 *
 * **Registry:** Watermelon UI — `@watermelon/progressive-input-stack` ([docs](https://ui.watermelon.sh/animated-components/progressive-input-stack))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressiveInputStack } from '@/registries/watermelon/components/ui/progressive-input-stack'

const meta: Meta<typeof ProgressiveInputStack> = {
  title: 'Watermelon UI/Progressive Input Stack',
  component: ProgressiveInputStack,
  tags: ['autodocs'],
  args: {
    steps: [{ id: "item-1", label: "Registry component", type: "text" }, { id: "item-1 2", label: "Registry component 2", type: "text" }, { id: "item-1 3", label: "Registry component 3", type: "text" }],
  },
}

export default meta
type Story = StoryObj<typeof ProgressiveInputStack>

export const Default: Story = {}
