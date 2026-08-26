import type { Meta, StoryObj } from '@storybook/react-vite'

import { AddCashDisclosure } from '@/registries/watermelon/components/ui/add-cash-disclosure'

/**
 * A top-up sheet: pick an amount, pick a card, confirm.
 *
 * **Registry:** Watermelon UI — `@watermelon/add-cash-disclosure`
 * ([docs](https://ui.watermelon.sh/animated-components/add-cash-disclosure))
 *
 * `onConfirm` returns a promise and the component awaits it to drive its
 * pending state, so the story resolves on a timer rather than immediately.
 */
const settle = () => new Promise<void>((resolve) => setTimeout(resolve, 1200))

const meta: Meta<typeof AddCashDisclosure> = {
  title: 'Watermelon UI/Add Cash Disclosure',
  component: AddCashDisclosure,
  tags: ['autodocs'],
  args: {
    initialBalance: 428,
    presets: [25, 50, 100, 250],
    cards: [
      { id: '1', last4: '4242', brand: 'VISA', isDefault: true },
      { id: '2', last4: '8891', brand: 'MASTERCARD', hasToggle: true },
    ],
    onConfirm: settle,
  },
}

export default meta
type Story = StoryObj<typeof AddCashDisclosure>

/** Two cards and four preset amounts. */
export const Default: Story = {}

/** A single card, so the picker has nothing to switch between. */
export const OneCard: Story = {
  args: { cards: [{ id: '1', last4: '4242', brand: 'VISA', isDefault: true }] },
}

/** An empty wallet. */
export const ZeroBalance: Story = { args: { initialBalance: 0 } }
