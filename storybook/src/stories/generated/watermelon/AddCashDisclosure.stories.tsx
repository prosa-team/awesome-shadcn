/**
 * Disclosure | Limits and fees must be disclosed before the user confirms a deposit — regulated-flow shaped.
 *
 * **Registry:** Watermelon UI — `@watermelon/add-cash-disclosure` ([docs](https://ui.watermelon.sh/animated-components/add-cash-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AddCashDisclosure } from '@/registries/watermelon/components/ui/add-cash-disclosure'

const meta: Meta<typeof AddCashDisclosure> = {
  title: 'Watermelon UI/Add Cash Disclosure',
  component: AddCashDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AddCashDisclosure>

export const Default: Story = {}
