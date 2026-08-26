/**
 * Cards | Composing happens inline in a list view, without navigating to a full mail screen.
 *
 * **Registry:** Watermelon UI — `@watermelon/compose-email-card` ([docs](https://ui.watermelon.sh/animated-components/compose-email-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ComposeEmailCard } from '@/registries/watermelon/components/ui/compose-email-card'

const meta: Meta<typeof ComposeEmailCard> = {
  title: 'Watermelon UI/Compose Email Card',
  component: ComposeEmailCard,
  tags: ['autodocs'],
  args: {
    data: { from: { id: "item-1", name: "Registry component", avatar: "Sample", email: "hey@example.com" }, to: [{ id: "item-1", name: "Registry component", avatar: "Sample", email: "hey@example.com" }, { id: "item-1 2", name: "Registry component 2", avatar: "Sample 2", email: "hey@example.com 2" }, { id: "item-1 3", name: "Registry component 3", avatar: "Sample 3", email: "hey@example.com 3" }], subject: "Sample", body: "The quick brown fox jumps over the lazy dog.", attachments: [{ id: "item-1", name: "Registry component", type: "Sample", size: "Sample", icon: "PDF" }, { id: "item-1 2", name: "Registry component 2", type: "Sample 2", size: "Sample 2", icon: "PDF" }, { id: "item-1 3", name: "Registry component 3", type: "Sample 3", size: "Sample 3", icon: "PDF" }] },
  },
}

export default meta
type Story = StoryObj<typeof ComposeEmailCard>

export const Default: Story = {}
