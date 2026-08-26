/**
 * Cards | Positions and performance need a dense summary a finance user can read without drilling in.
 *
 * **Registry:** Watermelon UI — `@watermelon/trade-summary` ([docs](https://ui.watermelon.sh/animated-components/trade-summary))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TradeSummary } from '@/registries/watermelon/components/ui/trade-summary'

const meta: Meta<typeof TradeSummary> = {
  title: 'Watermelon UI/Trade Summary',
  component: TradeSummary,
  tags: ['autodocs'],
  args: {
    date: "2026-01-01",
    trades: [{ id: "item-1", asset: "Sample", session: "Sample", market: "Sample", strategy: "Sample", description: "One line about what it does.", pnl: 1, sparklineData: [1, 2, 3], tags: ["Sample", "Sample 2", "Sample 3"], contracts: 1, side: "LONG" }, { id: "item-1 2", asset: "Sample 2", session: "Sample 2", market: "Sample 2", strategy: "Sample 2", description: "One line about what it does. 2", pnl: 2, sparklineData: [1, 2, 3], tags: ["Sample", "Sample 2", "Sample 3"], contracts: 2, side: "LONG" }, { id: "item-1 3", asset: "Sample 3", session: "Sample 3", market: "Sample 3", strategy: "Sample 3", description: "One line about what it does. 3", pnl: 3, sparklineData: [1, 2, 3], tags: ["Sample", "Sample 2", "Sample 3"], contracts: 3, side: "LONG" }],
  },
}

export default meta
type Story = StoryObj<typeof TradeSummary>

export const Default: Story = {}
