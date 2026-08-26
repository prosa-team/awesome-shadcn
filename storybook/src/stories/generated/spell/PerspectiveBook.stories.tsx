/**
 * You sell an ebook, guide, or course and a flat cover image undersells it.
 *
 * **Registry:** Spell UI — `@spell/perspective-book` ([docs](https://spell.sh/docs/perspective-book))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PerspectiveBook } from '@/registries/spell/perspective-book'

const meta: Meta<typeof PerspectiveBook> = {
  title: 'Spell UI/Perspective Book',
  component: PerspectiveBook,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof PerspectiveBook>

export const Default: Story = {}
