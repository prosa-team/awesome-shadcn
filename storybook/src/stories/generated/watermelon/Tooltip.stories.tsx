/**
 * 12 variants — hover hints matched to the rest of the set.
 *
 * **Registry:** Watermelon UI — `@watermelon/tooltip` ([docs](https://ui.watermelon.sh/components/tooltip))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip } from '@/registries/watermelon/components/ui/tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Watermelon UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}
