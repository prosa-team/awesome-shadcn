/**
 * Cards | Spending against a limit must be read in one look — the remaining balance is the headline.
 *
 * **Registry:** Watermelon UI — `@watermelon/budget-card` ([docs](https://ui.watermelon.sh/animated-components/budget-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BudgetCard } from '@/registries/watermelon/components/ui/budget-card'

const meta: Meta<typeof BudgetCard> = {
  title: 'Watermelon UI/Budget Card',
  component: BudgetCard,
  tags: ['autodocs'],
  args: {
    month: "Sample",
    totalBudget: 1,
    spentAmount: 1,
    breakdown: [{ label: "Registry component", amount: 1, color: "Sample" }, { label: "Registry component 2", amount: 2, color: "Sample 2" }, { label: "Registry component 3", amount: 3, color: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof BudgetCard>

export const Default: Story = {}
