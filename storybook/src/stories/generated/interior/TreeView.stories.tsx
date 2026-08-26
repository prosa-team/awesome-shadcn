/**
 * You need a tree view whose disclosure works with arrow keys.
 *
 * **Registry:** interior.dev — `@interior/tree-view` ([docs](https://interior.dev/docs/tree-view))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TreeView } from '@/registries/interior/components/interior/tree-view'

const meta: Meta<typeof TreeView> = {
  title: 'interior.dev/Tree View',
  component: TreeView,
  tags: ['autodocs'],
  args: {
    nodes: [{ id: "item-1", label: "Registry component" }, { id: "item-1 2", label: "Registry component 2" }, { id: "item-1 3", label: "Registry component 3" }],
    label: "Registry component",
  },
}

export default meta
type Story = StoryObj<typeof TreeView>

export const Default: Story = {}
