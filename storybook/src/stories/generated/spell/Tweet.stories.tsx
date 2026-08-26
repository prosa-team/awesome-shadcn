/**
 * A real post is your testimonial, and you want it in your own styling rather than X's embed script.
 *
 * **Registry:** Spell UI — `@spell/tweet` ([docs](https://spell.sh/docs/tweet))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tweet } from '@/registries/spell/tweet'

const meta: Meta<typeof Tweet> = {
  title: 'Spell UI/Tweet',
  component: Tweet,
  tags: ['autodocs'],
  args: {
    id: "item-1",
  },
}

export default meta
type Story = StoryObj<typeof Tweet>

export const Default: Story = {}
