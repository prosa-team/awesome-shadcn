/**
 * You need a table where rows animate to their new sorted order.
 *
 * **Registry:** interior.dev — `@interior/sortable-table` ([docs](https://interior.dev/docs/sortable-table))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SortableTable } from '@/registries/interior/components/interior/sortable-table'

const meta: Meta<typeof SortableTable> = {
  title: 'interior.dev/Sortable Table',
  component: SortableTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SortableTable>

export const Default: Story = {}
