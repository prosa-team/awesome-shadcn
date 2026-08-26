/**
 * Widgets | Currency conversion with instant confirmation of the direction being swapped.
 *
 * **Registry:** Watermelon UI — `@watermelon/swap-currency-card` ([docs](https://ui.watermelon.sh/animated-components/swap-currency-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SwapCurrencyCard } from '@/registries/watermelon/components/ui/swap-currency-card'

const meta: Meta<typeof SwapCurrencyCard> = {
  title: 'Watermelon UI/Swap Currency Card',
  component: SwapCurrencyCard,
  tags: ['autodocs'],
  args: {
    currencies: [{ code: "The quick brown fox jumps over the lazy dog.", countryCode: "Sample", flag: "Sample", rate: 1, name: "Registry component" }, { code: "The quick brown fox jumps over the lazy dog. 2", countryCode: "Sample 2", flag: "Sample 2", rate: 2, name: "Registry component 2" }, { code: "The quick brown fox jumps over the lazy dog. 3", countryCode: "Sample 3", flag: "Sample 3", rate: 3, name: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof SwapCurrencyCard>

export const Default: Story = {}
