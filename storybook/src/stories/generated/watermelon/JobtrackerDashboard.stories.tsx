/**
 * A field-service or agency tool: customer records, job pipelines, estimates with drag-and-drop line items.
 *
 * **Registry:** Watermelon UI — `@watermelon/jobtracker-dashboard` ([docs](https://ui.watermelon.sh/dashboard/jobtracker-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import JobtrackerDashboardDemo from '@/registries/watermelon/components/watermelon/jobtracker-dashboard/demo'

const meta: Meta<typeof JobtrackerDashboardDemo> = {
  title: 'Watermelon UI/Jobtracker Dashboard',
  component: JobtrackerDashboardDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof JobtrackerDashboardDemo>

export const Default: Story = {}
