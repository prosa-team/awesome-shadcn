/**
 * A developer portal: indexes, API credentials, billing, and project settings, in light and dark.
 *
 * **Registry:** Watermelon UI — `@watermelon/agndex-dashboard` ([docs](https://ui.watermelon.sh/dashboard/agndex-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import AgndexDashboardDemo from '@/registries/watermelon/components/watermelon/agndex-dashboard/demo'

const meta: Meta<typeof AgndexDashboardDemo> = {
  title: 'Watermelon UI/Agndex Dashboard',
  component: AgndexDashboardDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AgndexDashboardDemo>

export const Default: Story = {}
