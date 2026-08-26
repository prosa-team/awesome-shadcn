/**
 * Cards | Usage-based pricing means the customer must always be able to see how much they have burned.
 *
 * **Registry:** Watermelon UI — `@watermelon/credit-usage-card` ([docs](https://ui.watermelon.sh/animated-components/credit-usage-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CreditUsageCard } from '@/registries/watermelon/components/ui/credit-usage-card'

const meta: Meta<typeof CreditUsageCard> = {
  title: 'Watermelon UI/Credit Usage Card',
  component: CreditUsageCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CreditUsageCard>

export const Default: Story = {}
