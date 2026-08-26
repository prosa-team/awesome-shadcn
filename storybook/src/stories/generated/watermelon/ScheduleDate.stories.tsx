/**
 * Scheduler | Date and time are picked together and confirmed in one dialog.
 *
 * **Registry:** Watermelon UI — `@watermelon/schedule-date` ([docs](https://ui.watermelon.sh/animated-components/schedule-date))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScheduleDate } from '@/registries/watermelon/components/ui/schedule-date'

const meta: Meta<typeof ScheduleDate> = {
  title: 'Watermelon UI/Schedule Date',
  component: ScheduleDate,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScheduleDate>

export const Default: Story = {}
