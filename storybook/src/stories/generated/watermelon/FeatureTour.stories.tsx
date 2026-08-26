/**
 * Micro-interaction | A new feature must be introduced in place, with focus pulled to each step and an obvious exit.
 *
 * **Registry:** Watermelon UI — `@watermelon/feature-tour` ([docs](https://ui.watermelon.sh/animated-components/feature-tour))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FeatureTour } from '@/registries/watermelon/components/ui/feature-tour'

const meta: Meta<typeof FeatureTour> = {
  title: 'Watermelon UI/Feature Tour',
  component: FeatureTour,
  tags: ['autodocs'],
  args: {
    steps: [{ id: "item-1", title: "Registry component", description: "One line about what it does.", icon: "Sample" }, { id: "item-1 2", title: "Registry component 2", description: "One line about what it does. 2", icon: "Sample 2" }, { id: "item-1 3", title: "Registry component 3", description: "One line about what it does. 3", icon: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof FeatureTour>

export const Default: Story = {}
