/**
 * The page documents shortcuts and must show ⌘ on macOS and Ctrl elsewhere without a manual check.
 *
 * **Registry:** Spell UI — `@spell/kbd` ([docs](https://spell.sh/docs/kbd))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Kbd } from '@/registries/spell/kbd'

const meta: Meta<typeof Kbd> = {
  title: 'Spell UI/Keyboard Shortcuts',
  component: Kbd,
  tags: ['autodocs'],
  args: {
    keys: [{ display: "Sample", key: "item-1" }, { display: "Sample 2", key: "item-1 2" }, { display: "Sample 3", key: "item-1 3" }],
  },
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {}
