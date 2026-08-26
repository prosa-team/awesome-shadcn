import type { Meta, StoryObj } from '@storybook/react-vite'
import { Coins, CreditCard, PiggyBank, Wallet } from 'lucide-react'

import { MinimalCarousel } from '@/registries/watermelon/components/ui/minimal-carousel'

/**
 * A stack of cards where clicking one brings it forward and fans the rest.
 *
 * **Registry:** Watermelon UI — `@watermelon/minimal-carousel`
 * ([docs](https://ui.watermelon.sh/animated-components/minimal-carousel))
 *
 * Each card carries an `icon` typed as `React.ElementType` and a `color` used
 * directly as a CSS value, neither of which a generated sample can invent.
 */
const meta: Meta<typeof MinimalCarousel> = {
  title: 'Watermelon UI/Minimal Carousel',
  component: MinimalCarousel,
  tags: ['autodocs'],
  args: {
    cards: [
      { id: '1', title: 'Balance', value: '€4,280.00', color: '#7c3aed', icon: Wallet },
      { id: '2', title: 'Savings', value: '€12,900.00', color: '#0ea5e9', icon: PiggyBank },
      { id: '3', title: 'Credit', value: '€1,150.00', color: '#f59e0b', icon: CreditCard },
      { id: '4', title: 'Rewards', value: '3,420 pts', color: '#16a34a', icon: Coins },
    ],
  },
  render: (args) => (
    <div className="h-[26rem] w-[34rem] max-w-full">
      <MinimalCarousel {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof MinimalCarousel>

/** Four cards. Click one to bring it forward. */
export const Default: Story = {}

/** Two cards, where the fan is barely a fan. */
export const TwoCards: Story = {
  args: {
    cards: [
      { id: '1', title: 'Balance', value: '€4,280.00', color: '#7c3aed', icon: Wallet },
      { id: '2', title: 'Savings', value: '€12,900.00', color: '#0ea5e9', icon: PiggyBank },
    ],
  },
}
