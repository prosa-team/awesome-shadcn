/**
 * 24 variants — enough to give status, count, and tag badges visually distinct treatments.
 *
 * **Registry:** Watermelon UI — `@watermelon/badge` ([docs](https://ui.watermelon.sh/components/badge))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registries/watermelon/components/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Watermelon UI/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
