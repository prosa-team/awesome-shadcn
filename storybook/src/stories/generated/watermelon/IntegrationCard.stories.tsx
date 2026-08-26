/**
 * Cards | A settings page lists connected services with status and connect/disconnect actions per row.
 *
 * **Registry:** Watermelon UI — `@watermelon/integration-card` ([docs](https://ui.watermelon.sh/animated-components/integration-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IntegrationsCard } from '@/registries/watermelon/components/ui/integration-card'

const meta: Meta<typeof IntegrationsCard> = {
  title: 'Watermelon UI/Integration Card',
  component: IntegrationsCard,
  tags: ['autodocs'],
  args: {
    items: [{ id: "item-1", name: "Registry component", entities: "Sample", description: "One line about what it does.", tags: ["Sample", "Sample 2", "Sample 3"], triggers: 1, actions: 1, available: true, icon: "Sample" }, { id: "item-1 2", name: "Registry component 2", entities: "Sample 2", description: "One line about what it does. 2", tags: ["Sample", "Sample 2", "Sample 3"], triggers: 2, actions: 2, available: false, icon: "Sample 2" }, { id: "item-1 3", name: "Registry component 3", entities: "Sample 3", description: "One line about what it does. 3", tags: ["Sample", "Sample 2", "Sample 3"], triggers: 3, actions: 3, available: false, icon: "Sample 3" }],
    title: "Registry component",
  },
}

export default meta
type Story = StoryObj<typeof IntegrationsCard>

export const Default: Story = {}
