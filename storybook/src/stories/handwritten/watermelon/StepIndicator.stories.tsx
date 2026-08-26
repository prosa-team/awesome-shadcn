import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check, CreditCard, Package, Truck } from 'lucide-react'

import { StepIndicator } from '@/registries/watermelon/components/ui/step-indicator'

/**
 * A compact progress rail whose active step expands to show its label.
 *
 * **Registry:** Watermelon UI — `@watermelon/step-indicator`
 * ([docs](https://ui.watermelon.sh/animated-components/step-indicator))
 *
 * Each step carries an `icon` typed as a component, which is why the sample has
 * to be written: an invented object cannot supply one.
 */
const meta: Meta<typeof StepIndicator> = {
  title: 'Watermelon UI/Step Indicator',
  component: StepIndicator,
  tags: ['autodocs'],
  args: {
    steps: [
      { id: 'cart', label: 'Cart', icon: Package },
      { id: 'payment', label: 'Payment', icon: CreditCard },
      { id: 'shipping', label: 'Shipping', icon: Truck },
      { id: 'done', label: 'Done', icon: Check },
    ],
  },
}

export default meta
type Story = StoryObj<typeof StepIndicator>

/** Four steps. Hover one to expand its label. */
export const Default: Story = {}

/** Two steps, the shortest rail that still reads as progress. */
export const TwoSteps: Story = {
  args: {
    steps: [
      { id: 'draft', label: 'Draft', icon: Package },
      { id: 'published', label: 'Published', icon: Check },
    ],
  },
}

/** A delay before the label expands, for a rail that sits under the pointer's path. */
export const DelayedTooltip: Story = { args: { tooltipDelay: 400 } }
