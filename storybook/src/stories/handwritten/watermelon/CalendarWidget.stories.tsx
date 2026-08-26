import type { Meta, StoryObj } from '@storybook/react-vite'

import { CalendarWidget } from '@/registries/watermelon/components/ui/calendar-widget'

/** Events are keyed by ISO date, which is what the widget looks up on select. */
const EVENTS = {
  '2026-02-10': [
    { title: 'Registry review', time: '09:30' },
    { title: 'Design sync', time: '14:00' },
  ],
  '2026-02-12': [{ title: 'Storybook walkthrough', time: '11:00' }],
  '2026-02-17': [
    { title: 'Sprint planning', time: '10:00' },
    { title: 'Component triage', time: '15:30' },
    { title: 'Retro', time: '17:00' },
  ],
}

/**
 * A month grid with the selected day's events listed beneath it.
 *
 * **Registry:** Watermelon UI — `@watermelon/calendar-widget`
 * ([docs](https://ui.watermelon.sh/animated-components/calendar-widget))
 *
 * `events` is an index keyed by ISO date, and `initialSelectedDate` has to be
 * a key that exists or the widget opens on an empty day.
 */
const meta: Meta<typeof CalendarWidget> = {
  title: 'Watermelon UI/Calendar Widget',
  component: CalendarWidget,
  tags: ['autodocs'],
  args: {
    events: EVENTS,
    initialSelectedDate: '2026-02-10',
    currentMonthYear: 'February 2026',
  },
}

export default meta
type Story = StoryObj<typeof CalendarWidget>

/** Opening on a day with two events. */
export const Default: Story = {}

/** A busy day, where the list scrolls. */
export const BusyDay: Story = { args: { initialSelectedDate: '2026-02-17' } }

/** A day with nothing on it. */
export const EmptyDay: Story = { args: { initialSelectedDate: '2026-02-11' } }
