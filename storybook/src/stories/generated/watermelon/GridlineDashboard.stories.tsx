/**
 * Heavy operational tooling: network modelling, asset planning, and stakeholder workflows.
 *
 * **Registry:** Watermelon UI — `@watermelon/gridline-dashboard` ([docs](https://ui.watermelon.sh/dashboard/gridline-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import GridlineDashboardDemo from '@/registries/watermelon/components/watermelon/gridline-dashboard/demo'

const meta: Meta<typeof GridlineDashboardDemo> = {
  title: 'Watermelon UI/Gridline Dashboard',
  component: GridlineDashboardDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GridlineDashboardDemo>

export const Default: Story = {}
