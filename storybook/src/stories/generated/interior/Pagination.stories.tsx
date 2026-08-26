/**
 * You need pagination where the visible window moves without the row jumping.
 *
 * **Registry:** interior.dev — `@interior/pagination` ([docs](https://interior.dev/docs/pagination))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from '@/registries/interior/components/interior/pagination'

const meta: Meta<typeof Pagination> = {
  title: 'interior.dev/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    count: 1,
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
