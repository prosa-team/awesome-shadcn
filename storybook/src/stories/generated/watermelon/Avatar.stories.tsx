/**
 * 21 variants — including stacked, status-dot, and shaped versions you would otherwise build by hand.
 *
 * **Registry:** Watermelon UI — `@watermelon/avatar` ([docs](https://ui.watermelon.sh/components/avatar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registries/watermelon/components/ui/avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Watermelon UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {}
