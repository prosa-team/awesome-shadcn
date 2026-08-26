import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from '@/registries/reui/components/reui/sortable'

type Row = { id: string; label: string }

const ROWS: Row[] = [
  { id: '1', label: 'Magic UI' },
  { id: '2', label: 'Chánh Đại' },
  { id: '3', label: 'interior.dev' },
  { id: '4', label: 'Dot Matrix' },
]

/**
 * A sortable list, reordered by dragging the whole row or a dedicated handle.
 *
 * **Registry:** ReUI — `@reui/sortable`
 * ([docs](https://reui.io/components/sortable))
 *
 * Controlled like the Kanban board: `value` is the order, `onValueChange` is
 * the new one, and `getItemValue` identifies a row for the drag layer.
 */
const List = ({ withHandle }: { withHandle: boolean }) => {
  const [value, setValue] = useState(ROWS)

  return (
    <Sortable value={value} onValueChange={setValue} getItemValue={(row) => row.id}>
      <div className="flex w-80 flex-col gap-2">
        {value.map((row) => (
          <SortableItem key={row.id} value={row.id}>
            <div className="flex items-center gap-3 rounded-md border bg-card px-3 py-2 text-sm">
              {withHandle && (
                <SortableItemHandle className="cursor-grab text-muted-foreground">
                  ⠿
                </SortableItemHandle>
              )}
              {row.label}
            </div>
          </SortableItem>
        ))}
      </div>
    </Sortable>
  )
}

const meta: Meta<typeof Sortable> = {
  title: 'ReUI/Sortable',
  component: Sortable,
  tags: ['autodocs'],
  render: () => <List withHandle={false} />,
}

export default meta
type Story = StoryObj<typeof Sortable>

/** The whole row is the drag handle. */
export const Default: Story = {}

/** A dedicated handle, for rows that also carry buttons or links. */
export const WithHandle: Story = { render: () => <List withHandle /> }
