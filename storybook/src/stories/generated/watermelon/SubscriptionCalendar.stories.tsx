/**
 * Cards | Recurring charges must be seen on a calendar so renewals stop being a surprise.
 *
 * **Registry:** Watermelon UI — `@watermelon/subscription-calendar` ([docs](https://ui.watermelon.sh/animated-components/subscription-calendar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SubscriptionCalendar } from '@/registries/watermelon/components/ui/subscription-calendar'

const meta: Meta<typeof SubscriptionCalendar> = {
  title: 'Watermelon UI/Subscription Calendar',
  component: SubscriptionCalendar,
  tags: ['autodocs'],
  args: {
    month: "Sample",
    year: 1,
    days: [{ date: 1 }, { date: 2 }, { date: 3 }],
    monthlyTotal: 1,
    subscriptionsCount: 1,
    newCount: 1,
  },
}

export default meta
type Story = StoryObj<typeof SubscriptionCalendar>

export const Default: Story = {}
