/**
 * 25 variants — date display and picking in many densities.
 *
 * **Registry:** Watermelon UI — `@watermelon/calendar` ([docs](https://ui.watermelon.sh/components/calendar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@/registries/watermelon/components/ui/calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Watermelon UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {}
