/**
 * 15 variants — container styles to settle a product's card language early.
 *
 * **Registry:** Watermelon UI — `@watermelon/card` ([docs](https://ui.watermelon.sh/components/card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/registries/watermelon/components/ui/card'

const meta: Meta<typeof Card> = {
  title: 'Watermelon UI/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}
