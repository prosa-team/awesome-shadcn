/**
 * Widgets | Prices update dynamically as options change, inside a compact widget.
 *
 * **Registry:** Watermelon UI — `@watermelon/pricing-widget` ([docs](https://ui.watermelon.sh/animated-components/pricing-widget))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PricingWidget } from '@/registries/watermelon/components/ui/pricing-widget'

const meta: Meta<typeof PricingWidget> = {
  title: 'Watermelon UI/Pricing Widget',
  component: PricingWidget,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PricingWidget>

export const Default: Story = {}
