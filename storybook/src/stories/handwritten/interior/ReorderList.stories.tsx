import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ReorderList } from '@/registries/interior/components/interior/reorder-list'

type Task = { id: string; title: string }

const TASKS: Task[] = [
  { id: '1', title: 'Resolve the README manifest' },
  { id: '2', title: 'Install every registry' },
  { id: '3', title: 'Generate the stories' },
  { id: '4', title: 'Smoke-test what renders' },
]

/**
 * A keyboard- and pointer-reorderable list that reports the new order.
 *
 * **Registry:** interior.dev — `@interior/reorder-list`
 * ([docs](https://interior.dev/docs/reorder-list))
 *
 * `onReorder` is required, and a story that discards it would show a list that
 * snaps back on every drop. These stories hold the order in state so the
 * reorder actually sticks.
 */
/**
 * A component, not an inline render function.
 *
 * Storybook calls `render` as a plain function, so a hook called inside it is
 * not attached to a component. Development tolerates that; the production
 * build throws.
 */
const Stateful = ({ label, disabled }: { label: string; disabled?: boolean }) => {
  const [items, setItems] = useState(TASKS)

  return (
    <div className="w-96">
      <ReorderList
        label={label}
        disabled={disabled}
        items={items}
        onReorder={setItems}
        getId={(task: Task) => task.id}
        getLabel={(task: Task) => task.title}
      >
        {(task: Task) => (
          <div className="rounded-md border bg-card px-3 py-2 text-sm">{task.title}</div>
        )}
      </ReorderList>
    </div>
  )
}

const meta: Meta<typeof ReorderList<Task>> = {
  title: 'interior.dev/Reorder List',
  component: ReorderList,
  tags: ['autodocs'],
  render: (args) => <Stateful label={args.label} disabled={args.disabled} />,
  args: { label: 'Work packages' },
}

export default meta
type Story = StoryObj<typeof ReorderList<Task>>

/** Drag a row, or focus one and use the arrow keys. */
export const Default: Story = {}

/** Disabled: the rows render but neither pointer nor keyboard moves them. */
export const Disabled: Story = { args: { disabled: true } }
