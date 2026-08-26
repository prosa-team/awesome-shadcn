/**
 * Secondary switching inside a panel that already has tabs above it, so the two levels stay distinguishable.
 *
 * **Registry:** Fluid Functionalism — `@fluid/tabs-subtle` ([docs](https://www.fluidfunctionalism.com/docs/tabs-subtle))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TabsSubtle } from '@/registries/fluid/components/ui/tabs-subtle'

const meta: Meta<typeof TabsSubtle> = {
  title: 'Fluid Functionalism/TabsSubtle',
  component: TabsSubtle,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    selectedIndex: 1,
  },
}

export default meta
type Story = StoryObj<typeof TabsSubtle>

export const Default: Story = {}
