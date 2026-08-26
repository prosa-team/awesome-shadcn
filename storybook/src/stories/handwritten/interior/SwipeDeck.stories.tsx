import type { Meta, StoryObj } from '@storybook/react-vite'

import { SwipeDeck } from '@/registries/interior/components/interior/swipe-deck'

type Candidate = { id: string; name: string; summary: string }

const CANDIDATES: Candidate[] = [
  { id: '1', name: 'Magic UI', summary: '76 marketing and motion components.' },
  { id: '2', name: 'Extend UI', summary: 'PDF, DOCX, and XLSX rendered in the browser.' },
  { id: '3', name: 'Dot Matrix', summary: '61 dot-matrix loaders in one prop surface.' },
]

/**
 * A card deck decided by swiping left or right, with an undo.
 *
 * **Registry:** interior.dev — `@interior/swipe-deck`
 * ([docs](https://interior.dev/docs/swipe-deck))
 *
 * The component is generic and takes `itemKey`, `itemLabel`, and a render
 * function, so nothing about it can be inferred from the item type alone.
 */
const meta: Meta<typeof SwipeDeck<Candidate>> = {
  title: 'interior.dev/Swipe Deck',
  component: SwipeDeck,
  tags: ['autodocs'],
  args: {
    label: 'Registries to review',
    leftLabel: 'Skip',
    rightLabel: 'Add',
    items: CANDIDATES,
    itemKey: (item: Candidate) => item.id,
    itemLabel: (item: Candidate) => item.name,
    children: (item: Candidate) => (
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl border bg-card p-6">
        <p className="text-lg font-semibold">{item.name}</p>
        <p className="text-sm text-muted-foreground">{item.summary}</p>
      </div>
    ),
  },
}

export default meta
type Story = StoryObj<typeof SwipeDeck<Candidate>>

/** Drag a card sideways, or use the buttons. */
export const Default: Story = {}

/** An empty deck, which is the state every deck ends in. */
export const Empty: Story = { args: { items: [], emptyLabel: 'Nothing left to review' } }
