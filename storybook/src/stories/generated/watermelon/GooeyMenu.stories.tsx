/**
 * Tooltip | A logo or mark expands into an informational tooltip, for framework and tech callouts.
 *
 * **Registry:** Watermelon UI — `@watermelon/gooey-menu` ([docs](https://ui.watermelon.sh/animated-components/gooey-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GooeyMenu } from '@/registries/watermelon/components/ui/gooey-menu'

const meta: Meta<typeof GooeyMenu> = {
  title: 'Watermelon UI/Gooey Menu',
  component: GooeyMenu,
  tags: ['autodocs'],
  args: {
    data: [{ key: "item-1", label: "Registry component", value: "item-1", labelClass: "Sample", valueClass: "Sample" }, { key: "item-1 2", label: "Registry component 2", value: "item-1 2", labelClass: "Sample 2", valueClass: "Sample 2" }, { key: "item-1 3", label: "Registry component 3", value: "item-1 3", labelClass: "Sample 3", valueClass: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof GooeyMenu>

export const Default: Story = {}
