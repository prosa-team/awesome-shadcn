import type { Meta, StoryObj } from '@storybook/react-vite'
import { Coffee, ShoppingBag, Train, Zap } from 'lucide-react'

import { TransactionList } from '@/registries/watermelon/components/ui/transaction-list'

const TRANSACTIONS = [
  {
    id: '1',
    icon: <Coffee className="size-4" />,
    name: 'Kaffeehaus',
    category: 'Food & drink',
    amount: '-€4.20',
    date: '12 Feb 2026',
    time: '08:14',
    transactionId: 'TXN-4821-0091',
    paymentMethod: 'Apple Pay',
    cardNumber: '•••• 4242',
    cardType: 'VISA',
  },
  {
    id: '2',
    icon: <Train className="size-4" />,
    name: 'Deutsche Bahn',
    category: 'Travel',
    amount: '-€58.90',
    date: '11 Feb 2026',
    time: '17:02',
    transactionId: 'TXN-4820-7734',
    paymentMethod: 'Card',
    cardNumber: '•••• 4242',
    cardType: 'VISA',
  },
  {
    id: '3',
    icon: <ShoppingBag className="size-4" />,
    name: 'Zalando',
    category: 'Shopping',
    amount: '-€129.00',
    date: '09 Feb 2026',
    time: '21:47',
    transactionId: 'TXN-4818-2210',
    paymentMethod: 'Card',
    cardNumber: '•••• 8891',
    cardType: 'MASTERCARD',
  },
  {
    id: '4',
    icon: <Zap className="size-4" />,
    name: 'Stadtwerke',
    category: 'Utilities',
    amount: '-€74.30',
    date: '01 Feb 2026',
    time: '06:00',
    transactionId: 'TXN-4801-5567',
    paymentMethod: 'Direct debit',
    cardNumber: '•••• 8891',
    cardType: 'MASTERCARD',
  },
]

/**
 * A statement list where a row expands into the full transaction record.
 *
 * **Registry:** Watermelon UI — `@watermelon/transaction-list`
 * ([docs](https://ui.watermelon.sh/animated-components/transaction-list))
 *
 * Every row carries eleven fields including a `ReactNode` icon, and the
 * expanded state is where most of them show up. The sample has to be a real
 * statement for the component to read as one.
 */
const meta: Meta<typeof TransactionList> = {
  title: 'Watermelon UI/Transaction List',
  component: TransactionList,
  tags: ['autodocs'],
  args: { transactions: TRANSACTIONS },
  render: (args) => (
    <div className="w-[30rem] max-w-full">
      <TransactionList {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof TransactionList>

/** Four transactions. Click a row to expand it. */
export const Default: Story = {}

/** One transaction, the state after a filter narrows the list. */
export const SingleTransaction: Story = { args: { transactions: [TRANSACTIONS[0]] } }

/** An empty statement. */
export const Empty: Story = { args: { transactions: [] } }
