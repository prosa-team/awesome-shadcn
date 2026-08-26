/**
 * 26 variants — underline, pill, and segmented tab languages.
 *
 * **Registry:** Watermelon UI — `@watermelon/tabs` ([docs](https://ui.watermelon.sh/components/tabs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@/registries/watermelon/components/ui/tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Watermelon UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    value: "item-1",
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {}
