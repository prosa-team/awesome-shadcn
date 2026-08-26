/**
 * Tooltip | An icon-only navbar where labels appear on hover with continuous motion.
 *
 * **Registry:** Watermelon UI — `@watermelon/tooltip-navbar` ([docs](https://ui.watermelon.sh/animated-components/tooltip-navbar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TooltipNavbar } from '@/registries/watermelon/components/ui/tooltip-navbar'

const meta: Meta<typeof TooltipNavbar> = {
  title: 'Watermelon UI/Tooltip Navbar',
  component: TooltipNavbar,
  tags: ['autodocs'],
  args: {
    items: [{ icon: "Sample", label: "Registry component" }, { icon: "Sample 2", label: "Registry component 2" }, { icon: "Sample 3", label: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof TooltipNavbar>

export const Default: Story = {}
