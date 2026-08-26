/**
 * You need a command palette whose results reorder live as you type.
 *
 * **Registry:** interior.dev — `@interior/command-palette` ([docs](https://interior.dev/docs/command-palette))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CommandPalette } from '@/registries/interior/components/interior/command-palette'

const meta: Meta<typeof CommandPalette> = {
  title: 'interior.dev/Command Palette',
  component: CommandPalette,
  tags: ['autodocs'],
  args: {
    items: [{ id: "item-1", label: "Registry component" }, { id: "item-1 2", label: "Registry component 2" }, { id: "item-1 3", label: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof CommandPalette>

export const Default: Story = {}
