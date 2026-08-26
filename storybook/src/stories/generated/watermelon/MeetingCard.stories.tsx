/**
 * Cards | An upcoming meeting needs time, participants, and a join action reachable in one tap.
 *
 * **Registry:** Watermelon UI — `@watermelon/meeting-card` ([docs](https://ui.watermelon.sh/animated-components/meeting-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MeetingCard } from '@/registries/watermelon/components/ui/meeting-card'

const meta: Meta<typeof MeetingCard> = {
  title: 'Watermelon UI/Meeting Card',
  component: MeetingCard,
  tags: ['autodocs'],
  args: {
    title: "Registry component",
    date: "2026-01-01",
    time: "Sample",
    duration: "Sample",
    meetingLink: "Sample",
    notification: "Sample",
    participants: [{ name: "Registry component", avatar: "Sample" }, { name: "Registry component 2", avatar: "Sample 2" }, { name: "Registry component 3", avatar: "Sample 3" }],
    description: "One line about what it does.",
  },
}

export default meta
type Story = StoryObj<typeof MeetingCard>

export const Default: Story = {}
