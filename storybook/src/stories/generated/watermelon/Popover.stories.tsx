/**
 * 12 variants — anchored panels with different arrow and padding treatments.
 *
 * **Registry:** Watermelon UI — `@watermelon/popover` ([docs](https://ui.watermelon.sh/components/popover))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Popover } from '@/registries/watermelon/components/ui/popover'

const meta: Meta<typeof Popover> = {
  title: 'Watermelon UI/Popover',
  component: Popover,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {}
