import type { Meta, StoryObj } from '@storybook/react-vite'

import { DataTable } from '@/registries/watermelon/components/ui/data-table'

type Row = {
  registry: string
  components: number
  installed: number
  updated: string
}

const ROWS: Row[] = [
  { registry: 'Watermelon UI', components: 210, installed: 172, updated: '2026-02-11' },
  { registry: 'Magic UI', components: 76, installed: 76, updated: '2026-02-09' },
  { registry: 'Dot Matrix', components: 61, installed: 60, updated: '2026-01-28' },
  { registry: 'interior.dev', components: 54, installed: 54, updated: '2026-02-03' },
  { registry: 'Chánh Đại', components: 36, installed: 35, updated: '2026-02-09' },
  { registry: 'Spell UI', components: 33, installed: 33, updated: '2026-02-06' },
]

/**
 * A sortable table sized for agent output: columns declared, rows plain objects.
 *
 * **Registry:** Watermelon UI — `@watermelon/data-table`
 * ([docs](https://ui.watermelon.sh/components/data-table))
 *
 * `id` is required and meant to be stable — the component uses it so an
 * assistant can refer back to "the table above" — and `columns` declares the
 * key, label, and alignment per column.
 */
const meta: Meta<typeof DataTable<Row>> = {
  title: 'Watermelon UI/Data Table',
  component: DataTable,
  tags: ['autodocs'],
  args: {
    id: 'data-table-registries',
    data: ROWS,
    rowIdKey: 'registry',
    columns: [
      { key: 'registry', label: 'Registry' },
      { key: 'components', label: 'Components', align: 'right' },
      { key: 'installed', label: 'Installed', align: 'right' },
      { key: 'updated', label: 'Updated' },
    ],
  },
  render: (args) => (
    <div className="w-[40rem] max-w-full">
      <DataTable {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof DataTable<Row>>

/** Six rows. Click a header to sort. */
export const Default: Story = {}

/** Opening already sorted. */
export const SortedByCount: Story = {
  args: { defaultSort: { by: 'components', direction: 'desc' } },
}

/** The loading skeleton. */
export const Loading: Story = { args: { isLoading: true } }

/** Nothing to show, with the message the component prints instead. */
export const Empty: Story = {
  args: { data: [], emptyMessage: 'No registries resolved yet' },
}
