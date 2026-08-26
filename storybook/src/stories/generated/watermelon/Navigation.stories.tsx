/**
 * 7 blocks — full navbars, complementing the animated navigation components above.
 *
 * **Registry:** Watermelon UI — `@watermelon/navigation` ([docs](https://ui.watermelon.sh/blocks/navigation))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DashboardNavigationProvider } from '@/registries/watermelon/components/watermelon/demostack-dashboard/components/demostack/navigation'

const meta: Meta<typeof DashboardNavigationProvider> = {
  title: 'Watermelon UI/Navigation',
  component: DashboardNavigationProvider,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof DashboardNavigationProvider>

export const Default: Story = {}
