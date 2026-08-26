/**
 * A card should gain depth on hover, marking it as interactive in a grid of many.
 *
 * **Registry:** Unlumen UI — `@unlumen/tilt-card` ([docs](https://ui.unlumen.com/docs/ui/unlumen/tilt-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TiltCard } from '@/registries/unlumen/components/unlumen-ui/tilt-card'

const meta: Meta<typeof TiltCard> = {
  title: 'Unlumen UI/Tilt Card',
  component: TiltCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TiltCard>

export const Default: Story = {}
