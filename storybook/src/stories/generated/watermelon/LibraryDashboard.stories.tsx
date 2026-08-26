/**
 * Inventory and circulation: collection metrics, charts, branch switching, and alerts.
 *
 * **Registry:** Watermelon UI — `@watermelon/library-dashboard` ([docs](https://ui.watermelon.sh/dashboard/library-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import LibraryDashboardDemo from '@/registries/watermelon/components/watermelon/library-dashboard/demo'

const meta: Meta<typeof LibraryDashboardDemo> = {
  title: 'Watermelon UI/Library Dashboard',
  component: LibraryDashboardDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LibraryDashboardDemo>

export const Default: Story = {}
