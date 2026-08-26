/**
 * A feature or pricing card should tilt toward the cursor with a spotlight following it.
 *
 * **Registry:** Spell UI — `@spell/tilt-card` ([docs](https://spell.sh/docs/tilt-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TiltCard } from '@/registries/spell/tilt-card'

const meta: Meta<typeof TiltCard> = {
  title: 'Spell UI/Tilt Card',
  component: TiltCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TiltCard>

export const Default: Story = {}
