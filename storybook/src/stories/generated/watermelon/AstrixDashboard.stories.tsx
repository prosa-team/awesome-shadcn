/**
 * An AI-in-the-loop review workspace — classification metrics, a live pipeline, and a human review stream.
 *
 * **Registry:** Watermelon UI — `@watermelon/astrix-dashboard` ([docs](https://ui.watermelon.sh/dashboard/astrix-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import AstrixDashboardDemo from '@/registries/watermelon/components/watermelon/astrix-dashboard/demo'

const meta: Meta<typeof AstrixDashboardDemo> = {
  title: 'Watermelon UI/Astrix Dashboard',
  component: AstrixDashboardDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AstrixDashboardDemo>

export const Default: Story = {}
