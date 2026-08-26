/**
 * You need a right-click menu that opens from the pointer, not the corner.
 *
 * **Registry:** interior.dev — `@interior/context-menu` ([docs](https://interior.dev/docs/context-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContextMenu } from '@/registries/interior/components/interior/context-menu'

const meta: Meta<typeof ContextMenu> = {
  title: 'interior.dev/Context Menu',
  component: ContextMenu,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {}
