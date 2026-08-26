/**
 * Tooltip | The same for a vertical rail, with clip-path reveals that do not disturb the layout.
 *
 * **Registry:** Watermelon UI — `@watermelon/vertical-tooltip-navbar` ([docs](https://ui.watermelon.sh/animated-components/vertical-tooltip-navbar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TooltipVerticalNavbar } from '@/registries/watermelon/components/ui/vertical-tooltip-navbar'

const meta: Meta<typeof TooltipVerticalNavbar> = {
  title: 'Watermelon UI/Vertical Tooltip Navbar',
  component: TooltipVerticalNavbar,
  tags: ['autodocs'],
  args: {
    items: [{ icon: "Sample", label: "Registry component" }, { icon: "Sample 2", label: "Registry component 2" }, { icon: "Sample 3", label: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof TooltipVerticalNavbar>

export const Default: Story = {}
