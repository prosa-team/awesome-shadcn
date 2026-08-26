/**
 * Navigation | A collapsible sidebar that morphs on hover — for tools users keep open all day.
 *
 * **Registry:** Watermelon UI — `@watermelon/macos-sidebar` ([docs](https://ui.watermelon.sh/animated-components/macos-sidebar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MacOSSidebar } from '@/registries/watermelon/components/ui/macos-sidebar'

const meta: Meta<typeof MacOSSidebar> = {
  title: 'Watermelon UI/macOS Sidebar',
  component: MacOSSidebar,
  tags: ['autodocs'],
  args: {
    items: ["Sample", "Sample 2", "Sample 3"],
  },
}

export default meta
type Story = StoryObj<typeof MacOSSidebar>

export const Default: Story = {}
