/**
 * Navigation | Entries are browsed by date or section, with transitions that keep the reader oriented.
 *
 * **Registry:** Watermelon UI — `@watermelon/journal-navigation` ([docs](https://ui.watermelon.sh/animated-components/journal-navigation))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { JournalNavigation } from '@/registries/watermelon/components/ui/journal-navigation'

const meta: Meta<typeof JournalNavigation> = {
  title: 'Watermelon UI/Journal Navigation',
  component: JournalNavigation,
  tags: ['autodocs'],
  args: {
    entries: [{ id: "item-1", day: 1, month: "Sample", content: "The quick brown fox jumps over the lazy dog." }, { id: "item-1 2", day: 2, month: "Sample 2", content: "The quick brown fox jumps over the lazy dog. 2" }, { id: "item-1 3", day: 3, month: "Sample 3", content: "The quick brown fox jumps over the lazy dog. 3" }],
  },
}

export default meta
type Story = StoryObj<typeof JournalNavigation>

export const Default: Story = {}
