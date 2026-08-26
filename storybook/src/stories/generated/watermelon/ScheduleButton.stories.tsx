/**
 * Interaction | Publishing later needs date and time picked from the button that schedules it.
 *
 * **Registry:** Watermelon UI — `@watermelon/schedule-button` ([docs](https://ui.watermelon.sh/animated-components/schedule-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScheduleButton } from '@/registries/watermelon/components/ui/schedule-button'

const meta: Meta<typeof ScheduleButton> = {
  title: 'Watermelon UI/Schedule Button',
  component: ScheduleButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScheduleButton>

export const Default: Story = {}
