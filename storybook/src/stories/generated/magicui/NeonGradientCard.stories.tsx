/**
 * A card must glow hard against a dark background — highest-attention treatment in the set.
 *
 * **Registry:** Magic UI — `@magicui/neon-gradient-card` ([docs](https://magicui.design/docs/components/neon-gradient-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { NeonGradientCard } from '@/registries/magicui/ui/neon-gradient-card'

const meta: Meta<typeof NeonGradientCard> = {
  title: 'Magic UI/Neon Gradient Card',
  component: NeonGradientCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NeonGradientCard>

export const Default: Story = {}
