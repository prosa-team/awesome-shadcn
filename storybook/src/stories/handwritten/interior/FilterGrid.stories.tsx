import type { Meta, StoryObj } from '@storybook/react-vite'

import { FilterGrid } from '@/registries/interior/components/interior/filter-grid'

type Registry = { id: string; name: string; kind: 'components' | 'loaders' | 'documents' }

const REGISTRIES: Registry[] = [
  { id: 'magicui', name: 'Magic UI', kind: 'components' },
  { id: 'ncdai', name: 'Chánh Đại', kind: 'components' },
  { id: 'interior', name: 'interior.dev', kind: 'components' },
  { id: 'unlumen', name: 'Unlumen UI', kind: 'components' },
  { id: 'dotmatrix', name: 'Dot Matrix', kind: 'loaders' },
  { id: 'extend', name: 'Extend UI', kind: 'documents' },
]

/**
 * A grid whose filter chips reorganise the items in place, with the layout held steady.
 *
 * **Registry:** interior.dev — `@interior/filter-grid`
 * ([docs](https://interior.dev/docs/filter-grid))
 *
 * The component is generic over the item type and takes `getKey`, `renderItem`,
 * and a `match` per filter as functions, so the sample data and the three
 * callbacks have to be written together.
 */
const meta: Meta<typeof FilterGrid<Registry>> = {
  title: 'interior.dev/Filter Grid',
  component: FilterGrid,
  tags: ['autodocs'],
  args: {
    label: 'Registries',
    items: REGISTRIES,
    columns: 3,
    getKey: (item: Registry) => item.id,
    renderItem: (item: Registry) => (
      <div className="rounded-lg border bg-card p-4">
        <p className="font-medium">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.kind}</p>
      </div>
    ),
    filters: [
      { id: 'all', label: 'All', match: () => true },
      { id: 'components', label: 'Components', match: (i: Registry) => i.kind === 'components' },
      { id: 'loaders', label: 'Loaders', match: (i: Registry) => i.kind === 'loaders' },
      { id: 'documents', label: 'Documents', match: (i: Registry) => i.kind === 'documents' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof FilterGrid<Registry>>

export const Default: Story = {}

/** A single column, the layout the same grid falls back to on a phone. */
export const SingleColumn: Story = { args: { columns: 1 } }

/** Starting on a filter that matches one item, so the empty-to-full transition is visible. */
export const PreFiltered: Story = { args: { defaultValue: 'loaders' } }
