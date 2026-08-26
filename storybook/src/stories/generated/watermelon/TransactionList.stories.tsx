/**
 * Micro-interaction | Transactions expand to full detail in the list, so the ledger keeps its context.
 *
 * **Registry:** Watermelon UI — `@watermelon/transaction-list` ([docs](https://ui.watermelon.sh/animated-components/transaction-list))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TransactionList } from '@/registries/watermelon/components/ui/transaction-list'

const meta: Meta<typeof TransactionList> = {
  title: 'Watermelon UI/Transaction List',
  component: TransactionList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TransactionList>

export const Default: Story = {}
