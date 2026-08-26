/**
 * Widgets | A dashboard calendar where progressive blur keeps focus on the selected range.
 *
 * **Registry:** Watermelon UI — `@watermelon/calendar-widget` ([docs](https://ui.watermelon.sh/animated-components/calendar-widget))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CalendarWidget } from '@/registries/watermelon/components/ui/calendar-widget'

const meta: Meta<typeof CalendarWidget> = {
  title: 'Watermelon UI/Calendar Widget',
  component: CalendarWidget,
  tags: ['autodocs'],
  args: {
    initialSelectedDate: "Sample",
    currentMonthYear: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof CalendarWidget>

export const Default: Story = {}
