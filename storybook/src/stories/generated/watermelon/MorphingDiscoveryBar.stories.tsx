/**
 * Tabs | A discovery bar that expands into contextual actions as the user explores.
 *
 * **Registry:** Watermelon UI — `@watermelon/morphing-discovery-bar` ([docs](https://ui.watermelon.sh/animated-components/morphing-discovery-bar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MorphingDiscoveryBar } from '@/registries/watermelon/components/ui/morphing-discovery-bar'

const meta: Meta<typeof MorphingDiscoveryBar> = {
  title: 'Watermelon UI/Morphing Discovery Bar',
  component: MorphingDiscoveryBar,
  tags: ['autodocs'],
  args: {
    categories: [{ id: "item-1", label: "Registry component", icon: "Sample", activeColor: "Sample", activeTextColor: "Sample" }, { id: "item-1 2", label: "Registry component 2", icon: "Sample 2", activeColor: "Sample 2", activeTextColor: "Sample 2" }, { id: "item-1 3", label: "Registry component 3", icon: "Sample 3", activeColor: "Sample 3", activeTextColor: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof MorphingDiscoveryBar>

export const Default: Story = {}
