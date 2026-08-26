/**
 * A multi-tenant workspace with organisation switching, resource discovery, and team filtering.
 *
 * **Registry:** Watermelon UI — `@watermelon/demostack-dashboard` ([docs](https://ui.watermelon.sh/dashboard/demostack-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import DemostackDashboardDemo from '@/registries/watermelon/components/watermelon/demostack-dashboard/demo'

const meta: Meta<typeof DemostackDashboardDemo> = {
  title: 'Watermelon UI/Demostack Dashboard',
  component: DemostackDashboardDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DemostackDashboardDemo>

export const Default: Story = {}
