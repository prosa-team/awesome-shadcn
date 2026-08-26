/**
 * Micro-interaction | A crypto exchange input where amounts and converted values update as the user types.
 *
 * **Registry:** Watermelon UI — `@watermelon/aave-swap-component` ([docs](https://ui.watermelon.sh/animated-components/aave-swap-component))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AaveSwapComponent } from '@/registries/watermelon/components/ui/aave-swap-component'

const meta: Meta<typeof AaveSwapComponent> = {
  title: 'Watermelon UI/Aave Swap Component',
  component: AaveSwapComponent,
  tags: ['autodocs'],
  args: {
    from: { name: "Registry component", symbol: "Sample", priceUSD: 1, logo: "Sample" },
    to: { name: "Registry component", symbol: "Sample", priceUSD: 1, logo: "Sample" },
  },
}

export default meta
type Story = StoryObj<typeof AaveSwapComponent>

export const Default: Story = {}
