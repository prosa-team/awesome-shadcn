/**
 * You need a drag-to-reorder list where the gap itself is the drop target.
 *
 * **Registry:** interior.dev — `@interior/reorder-list` ([docs](https://interior.dev/docs/reorder-list))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ReorderList } from '@/registries/interior/components/interior/reorder-list'

const meta: Meta<typeof ReorderList> = {
  title: 'interior.dev/Reorder List',
  component: ReorderList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ReorderList>

export const Default: Story = {}
