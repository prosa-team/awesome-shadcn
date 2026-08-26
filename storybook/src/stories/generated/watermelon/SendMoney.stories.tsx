/**
 * Micro-interaction | A transfer flow needs confirmation, status, and result states in one compact interaction.
 *
 * **Registry:** Watermelon UI — `@watermelon/send-money` ([docs](https://ui.watermelon.sh/animated-components/send-money))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SendMoney } from '@/registries/watermelon/components/ui/send-money'

const meta: Meta<typeof SendMoney> = {
  title: 'Watermelon UI/Send Money',
  component: SendMoney,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SendMoney>

export const Default: Story = {}
