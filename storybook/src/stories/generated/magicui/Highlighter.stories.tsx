/**
 * A phrase in a paragraph is the point and needs a hand-drawn marker stroke instead of a `<mark>` block.
 *
 * **Registry:** Magic UI — `@magicui/highlighter` ([docs](https://magicui.design/docs/components/highlighter))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Highlighter } from '@/registries/magicui/ui/highlighter'

const meta: Meta<typeof Highlighter> = {
  title: 'Magic UI/Highlighter',
  component: Highlighter,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof Highlighter>

export const Default: Story = {}
