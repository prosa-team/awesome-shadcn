/**
 * Micro-interaction | A card needs a small cue that it can be acted on, before the user commits to touching it.
 *
 * **Registry:** Watermelon UI — `@watermelon/card-cue` ([docs](https://ui.watermelon.sh/animated-components/card-cue))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import CardCue from '@/registries/watermelon/components/ui/card-cue'

const meta: Meta<typeof CardCue> = {
  title: 'Watermelon UI/Card Cue',
  component: CardCue,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardCue>

export const Default: Story = {}
