/**
 * Choice Chips | Multi-select should feel rewarding — reactions, mood pickers, interest tagging.
 *
 * **Registry:** Watermelon UI — `@watermelon/emoji-spree-choice-chips` ([docs](https://ui.watermelon.sh/animated-components/emoji-spree-choice-chips))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { EmojiSpreeChips } from '@/registries/watermelon/components/ui/emoji-spree-choice-chips'

const meta: Meta<typeof EmojiSpreeChips> = {
  title: 'Watermelon UI/Emoji Spree Choice Chips',
  component: EmojiSpreeChips,
  tags: ['autodocs'],
  args: {
    interests: [{ id: "item-1", label: "Registry component", emoji: "Sample" }, { id: "item-1 2", label: "Registry component 2", emoji: "Sample 2" }, { id: "item-1 3", label: "Registry component 3", emoji: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof EmojiSpreeChips>

export const Default: Story = {}
