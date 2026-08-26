import type { Meta, StoryObj } from '@storybook/react-vite'

import { SortableTable } from '@/registries/interior/components/interior/sortable-table'

type Row = { id: string; registry: string; components: number; updated: string }

const ROWS: Row[] = [
  { id: 'magicui', registry: 'Magic UI', components: 76, updated: '2026-02-11' },
  { id: 'dotmatrix', registry: 'Dot Matrix', components: 61, updated: '2026-01-28' },
  { id: 'interior', registry: 'interior.dev', components: 54, updated: '2026-02-03' },
  { id: 'ncdai', registry: 'Chánh Đại', components: 36, updated: '2026-02-09' },
  { id: 'unlumen', registry: 'Unlumen UI', components: 27, updated: '2026-01-19' },
]

/**
 * A table whose header cells sort the rows, with the sort state controllable.
 *
 * **Registry:** interior.dev — `@interior/sortable-table`
 * ([docs](https://interior.dev/docs/sortable-table))
 *
 * Each column carries its own `value` accessor, which is what lets the numeric
 * column sort as numbers rather than as text.
 */
const meta: Meta<typeof SortableTable<Row>> = {
  title: 'interior.dev/Sortable Table',
  component: SortableTable,
  tags: ['autodocs'],
  args: {
    label: 'Registries by size',
    rows: ROWS,
    getRowId: (row: Row) => row.id,
    columns: [
      { id: 'registry', header: 'Registry', value: (row: Row) => row.registry },
      {
        id: 'components',
        header: 'Components',
        numeric: true,
        align: 'end',
        value: (row: Row) => row.components,
      },
      { id: 'updated', header: 'Updated', value: (row: Row) => row.updated },
    ],
  },
  render: (args) => (
    <div className="w-[36rem]">
      <SortableTable {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof SortableTable<Row>>

/** Unsorted: the rows keep the order they were given. */
export const Default: Story = {}

/** Opening already sorted, the common case for a table with an obvious ranking. */
export const SortedByCount: Story = {
  args: { defaultSort: { columnId: 'components', direction: 'desc' } },
}

/** Markable rows, for a table where one row is the current selection. */
export const Markable: Story = { args: { markable: true } }
