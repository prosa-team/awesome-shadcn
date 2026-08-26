/**
 * Micro-interaction | A floating pill carries scroll progress and contextual actions, Dynamic Island style.
 *
 * **Registry:** Watermelon UI — `@watermelon/scroll-island` ([docs](https://ui.watermelon.sh/animated-components/scroll-island))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollIsland } from '@/registries/watermelon/components/ui/scroll-island'

const meta: Meta<typeof ScrollIsland> = {
  title: 'Watermelon UI/Scroll Island',
  component: ScrollIsland,
  tags: ['autodocs'],
  args: {
    topics: [{ id: "item-1", title: "Registry component", content: "The quick brown fox jumps over the lazy dog." }, { id: "item-1 2", title: "Registry component 2", content: "The quick brown fox jumps over the lazy dog. 2" }, { id: "item-1 3", title: "Registry component 3", content: "The quick brown fox jumps over the lazy dog. 3" }],
  },
}

export default meta
type Story = StoryObj<typeof ScrollIsland>

export const Default: Story = {}
