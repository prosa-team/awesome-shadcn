/**
 * Micro-interaction | One control splits into related actions, keeping the primary path obvious.
 *
 * **Registry:** Watermelon UI — `@watermelon/split-actions` ([docs](https://ui.watermelon.sh/animated-components/split-actions))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import SplitActions from '@/registries/watermelon/components/ui/split-actions'

const meta: Meta<typeof SplitActions> = {
  title: 'Watermelon UI/Split Actions',
  component: SplitActions,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SplitActions>

export const Default: Story = {}
