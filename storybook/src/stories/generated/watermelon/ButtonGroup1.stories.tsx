/**
 * 12 variants — segmented and split-action groupings.
 *
 * **Registry:** Watermelon UI — `@watermelon/button-group-1` ([docs](https://ui.watermelon.sh/components/button-group))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import ButtonGroup1 from '@/registries/watermelon/components/ui/button-group-1'

const meta: Meta<typeof ButtonGroup1> = {
  title: 'Watermelon UI/Button Group',
  component: ButtonGroup1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonGroup1>

export const Default: Story = {}
