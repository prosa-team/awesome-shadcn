/**
 * A grid of cards where the border should follow the cursor, so hover targets are unmistakable.
 *
 * **Registry:** Magic UI — `@magicui/magic-card` ([docs](https://magicui.design/docs/components/magic-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MagicCard } from '@/registries/magicui/ui/magic-card'

const meta: Meta<typeof MagicCard> = {
  title: 'Magic UI/Magic Card',
  component: MagicCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MagicCard>

export const Default: Story = {}
