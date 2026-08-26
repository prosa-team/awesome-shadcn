/**
 * Tabs | Tabs that morph between active states, when each section is visually distinct.
 *
 * **Registry:** Watermelon UI — `@watermelon/discrete-tabs` ([docs](https://ui.watermelon.sh/animated-components/discrete-tabs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DiscreteTabs } from '@/registries/watermelon/components/ui/discrete-tabs'

const meta: Meta<typeof DiscreteTabs> = {
  title: 'Watermelon UI/Discrete Tabs',
  component: DiscreteTabs,
  tags: ['autodocs'],
  args: {
    tabs: [{ id: "item-1", icon: "Sample", label: "Registry component", activeColor: "Sample" }, { id: "item-1 2", icon: "Sample 2", label: "Registry component 2", activeColor: "Sample 2" }, { id: "item-1 3", icon: "Sample 3", label: "Registry component 3", activeColor: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof DiscreteTabs>

export const Default: Story = {}
