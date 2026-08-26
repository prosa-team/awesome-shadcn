/**
 * Micro-interaction | Display and edit modes are the same element, so editing never causes a layout jump.
 *
 * **Registry:** Watermelon UI — `@watermelon/inline-edit` ([docs](https://ui.watermelon.sh/animated-components/inline-edit))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineEditCard } from '@/registries/watermelon/components/ui/inline-edit'

const meta: Meta<typeof InlineEditCard> = {
  title: 'Watermelon UI/Inline Edit',
  component: InlineEditCard,
  tags: ['autodocs'],
  args: {
    data: { event: "Sample", date: "2026-01-01", start: "2026-01-01", end: "2026-01-01", location: "Sample", url: "https://ui.shadcn.com", desc: "Sample" },
  },
}

export default meta
type Story = StoryObj<typeof InlineEditCard>

export const Default: Story = {}
