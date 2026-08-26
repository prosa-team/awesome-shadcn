/**
 * 15 variants — from compact prev/next to full page ranges.
 *
 * **Registry:** Watermelon UI — `@watermelon/pagination` ([docs](https://ui.watermelon.sh/components/pagination))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from '@/registries/watermelon/components/ui/pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Watermelon UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
