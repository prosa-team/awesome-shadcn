import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanOverlay,
} from '@/registries/reui/components/reui/kanban'

type Card = { id: string; title: string }

const INITIAL: Record<string, Card[]> = {
  Backlog: [
    { id: '1', title: 'Resolve the README manifest' },
    { id: '2', title: 'Probe every registry' },
  ],
  'In progress': [{ id: '3', title: 'Generate the stories' }],
  Done: [
    { id: '4', title: 'Install the registries' },
    { id: '5', title: 'Smoke-test what renders' },
  ],
}

/**
 * A drag-and-drop board: columns of cards, moved within and between columns.
 *
 * **Registry:** ReUI — `@reui/kanban`
 * ([docs](https://reui.io/components/kanban))
 *
 * The board is controlled. `value` is a record of column name to cards and
 * every drag calls `onValueChange`, so a story that discards it shows cards
 * snapping back on every drop. `getItemValue` is how the drag layer identifies
 * a card, and there is no default.
 */
const Board = ({ columns }: { columns: Record<string, Card[]> }) => {
  const [value, setValue] = useState(columns)

  return (
    <Kanban value={value} onValueChange={setValue} getItemValue={(card) => card.id}>
      <KanbanBoard className="grid auto-cols-fr grid-flow-col gap-4">
        {Object.entries(value).map(([column, cards]) => (
          <KanbanColumn key={column} value={column} className="rounded-lg border bg-muted/40 p-3">
            <p className="mb-2 text-sm font-medium">
              {column}
              <span className="ml-2 text-muted-foreground">{cards.length}</span>
            </p>
            <KanbanColumnContent value={column} className="flex flex-col gap-2">
              {cards.map((card) => (
                <KanbanItem key={card.id} value={card.id}>
                  <div className="rounded-md border bg-card p-3 text-sm shadow-sm">
                    {card.title}
                  </div>
                </KanbanItem>
              ))}
            </KanbanColumnContent>
          </KanbanColumn>
        ))}
      </KanbanBoard>
      <KanbanOverlay />
    </Kanban>
  )
}

const meta: Meta<typeof Kanban> = {
  title: 'ReUI/Kanban',
  component: Kanban,
  tags: ['autodocs'],
  render: () => (
    <div className="w-[52rem] max-w-full">
      <Board columns={INITIAL} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Kanban>

/** Three columns. Drag a card within a column or across to another. */
export const Default: Story = {}

/** A board where one column has run empty — the drop target still has to work. */
export const EmptyColumn: Story = {
  render: () => (
    <div className="w-[52rem] max-w-full">
      <Board columns={{ ...INITIAL, 'In progress': [] }} />
    </div>
  ),
}
