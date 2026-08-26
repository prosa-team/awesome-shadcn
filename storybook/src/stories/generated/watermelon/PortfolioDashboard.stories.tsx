/**
 * Task management sorted by priority and category — the general-purpose starting point.
 *
 * **Registry:** Watermelon UI — `@watermelon/portfolio-dashboard` ([docs](https://ui.watermelon.sh/dashboard/portfolio-dashboard))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PortfolioDashboard } from '@/registries/watermelon/components/ui/portfolio-dashboard'

const meta: Meta<typeof PortfolioDashboard> = {
  title: 'Watermelon UI/Portfolio Dashboard',
  component: PortfolioDashboard,
  tags: ['autodocs'],
  args: {
    data: { totalBalance: 1, totalPlValue: 1, totalPlPercentage: 1, riskLevel: "LOW", chartData: [{ date: "2026-01-01", value: 1 }, { date: "2026-01-01 2", value: 2 }, { date: "2026-01-01 3", value: 3 }], assets: [{ id: "item-1", name: "Registry component", symbol: "Sample", icon: "Sample", price: 1, holdingsValue: 1, holdingsAmount: 1, allocation: 1, plValue: 1, plPercentage: 1, color: "Sample" }, { id: "item-1 2", name: "Registry component 2", symbol: "Sample 2", icon: "Sample 2", price: 2, holdingsValue: 2, holdingsAmount: 2, allocation: 2, plValue: 2, plPercentage: 2, color: "Sample 2" }, { id: "item-1 3", name: "Registry component 3", symbol: "Sample 3", icon: "Sample 3", price: 3, holdingsValue: 3, holdingsAmount: 3, allocation: 3, plValue: 3, plPercentage: 3, color: "Sample 3" }] },
  },
}

export default meta
type Story = StoryObj<typeof PortfolioDashboard>

export const Default: Story = {}
