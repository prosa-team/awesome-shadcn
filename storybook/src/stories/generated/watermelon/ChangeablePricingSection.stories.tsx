/**
 * Marketing | Monthly/yearly billing toggles and plan details expand — a complete SaaS pricing surface.
 *
 * **Registry:** Watermelon UI — `@watermelon/changeable-pricing-section` ([docs](https://ui.watermelon.sh/animated-components/changeable-pricing-section))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import ChangeablePricingSection from '@/registries/watermelon/components/ui/changeable-pricing-section'

const meta: Meta<typeof ChangeablePricingSection> = {
  title: 'Watermelon UI/Changeable Pricing Section',
  component: ChangeablePricingSection,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ChangeablePricingSection>

export const Default: Story = {}
