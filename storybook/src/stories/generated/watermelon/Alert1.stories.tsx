/**
 * 30 variants — the widest set here, for products that need distinct looks per severity and placement.
 *
 * **Registry:** Watermelon UI — `@watermelon/alert-1` ([docs](https://ui.watermelon.sh/components/alerts))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Alert1 from '@/registries/watermelon/components/ui/alert-1'

const meta: Meta<typeof Alert1> = {
  title: 'Watermelon UI/Alerts',
  component: Alert1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert1>

export const Default: Story = {}
