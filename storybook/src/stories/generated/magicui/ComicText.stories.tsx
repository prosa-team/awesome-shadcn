/**
 * A playful brand needs a headline with comic-book weight and impact, not a standard type ramp.
 *
 * **Registry:** Magic UI — `@magicui/comic-text` ([docs](https://magicui.design/docs/components/comic-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ComicText } from '@/registries/magicui/ui/comic-text'

const meta: Meta<typeof ComicText> = {
  title: 'Magic UI/Comic Text',
  component: ComicText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof ComicText>

export const Default: Story = {}
