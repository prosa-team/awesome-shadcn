/**
 * The brand gradient should move through the headline in a wave rather than sit static.
 *
 * **Registry:** Spell UI — `@spell/gradient-wave-text` ([docs](https://spell.sh/docs/gradient-wave-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GradientWaveText } from '@/registries/spell/gradient-wave-text'

const meta: Meta<typeof GradientWaveText> = {
  title: 'Spell UI/Gradient Wave Text',
  component: GradientWaveText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GradientWaveText>

export const Default: Story = {}
