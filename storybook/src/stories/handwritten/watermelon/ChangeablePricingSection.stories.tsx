import type { Meta, StoryObj } from '@storybook/react-vite'

import ChangeablePricingSection from '@/registries/watermelon/components/ui/changeable-pricing-section'

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'One project and the free registries.',
    priceMonthly: '€0',
    priceYearly: '€0',
    features: [{ text: 'One project' }, { text: 'Community support' }],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Every registry, unlimited projects.',
    priceMonthly: '€29',
    priceYearly: '€290',
    badge: 'Most popular',
    features: [
      { text: 'Unlimited projects' },
      { text: 'Every registry', hasInfo: true },
      { text: 'Email support' },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    description: 'Shared registries and seats.',
    priceMonthly: '€99',
    priceYearly: '€990',
    features: [{ text: 'Everything in Pro' }, { text: 'Ten seats' }, { text: 'Priority support' }],
  },
]

/**
 * A pricing table with a monthly and yearly price per plan.
 *
 * **Registry:** Watermelon UI — `@watermelon/changeable-pricing-section`
 * ([docs](https://ui.watermelon.sh/animated-components/changeable-pricing-section))
 *
 * The component's point is the toggle between the two prices, so the sample
 * needs a real yearly discount and one plan badged as recommended.
 */
const meta: Meta<typeof ChangeablePricingSection> = {
  title: 'Watermelon UI/Changeable Pricing Section',
  component: ChangeablePricingSection,
  tags: ['autodocs'],
  args: { plans: PLANS },
}

export default meta
type Story = StoryObj<typeof ChangeablePricingSection>

/** Three tiers with the middle one recommended. */
export const Default: Story = {}

/** Two tiers, for a product with a single upgrade. */
export const TwoTiers: Story = { args: { plans: [PLANS[0], PLANS[1]] } }
