import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContextMenu } from '@/registries/interior/components/interior/context-menu'

/**
 * A right-click menu that opens at the pointer and stays inside the viewport.
 *
 * **Registry:** interior.dev — `@interior/context-menu`
 * ([docs](https://interior.dev/docs/context-menu))
 *
 * `items` is a union: an entry is either a separator or a command. The story
 * supplies both kinds, because the separator is the part a generated sample
 * would never produce.
 */
const meta: Meta<typeof ContextMenu> = {
  title: 'interior.dev/Context Menu',
  component: ContextMenu,
  tags: ['autodocs'],
  args: {
    label: 'Row actions',
    items: [
      { id: 'open', label: 'Open', shortcut: '⏎' },
      { id: 'rename', label: 'Rename', shortcut: '⌘R' },
      { id: 'sep-1', type: 'separator' },
      { id: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
      { id: 'archive', label: 'Archive', disabled: true },
      { id: 'sep-2', type: 'separator' },
      { id: 'delete', label: 'Delete', shortcut: '⌫' },
    ],
    children: (
      <div className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        Right-click anywhere in this box
      </div>
    ),
  },
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {}

/** Commands only — no separators, for a short menu that needs no grouping. */
export const Flat: Story = {
  args: {
    items: [
      { id: 'copy', label: 'Copy', shortcut: '⌘C' },
      { id: 'paste', label: 'Paste', shortcut: '⌘V' },
    ],
  },
}

/** Disabled: the trigger stops offering a menu at all. */
export const Disabled: Story = { args: { disabled: true } }
