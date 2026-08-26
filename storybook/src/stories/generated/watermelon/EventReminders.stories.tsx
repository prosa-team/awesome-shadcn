/**
 * Micro-interaction | Reminders are set and adjusted with lightweight controls, not a scheduling dialog.
 *
 * **Registry:** Watermelon UI — `@watermelon/event-reminders` ([docs](https://ui.watermelon.sh/animated-components/event-reminders))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { EventReminders } from '@/registries/watermelon/components/ui/event-reminders'

const meta: Meta<typeof EventReminders> = {
  title: 'Watermelon UI/Event Reminders',
  component: EventReminders,
  tags: ['autodocs'],
  args: {
    title: "Registry component",
    date: "2026-01-01",
  },
}

export default meta
type Story = StoryObj<typeof EventReminders>

export const Default: Story = {}
