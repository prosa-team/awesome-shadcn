/**
 * A demo input where typing bursts particles, to make an empty field worth touching.
 *
 * **Registry:** Spell UI — `@spell/exploding-input` ([docs](https://spell.sh/docs/exploding-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ExplodingInput } from '@/registries/spell/exploding-input'

const meta: Meta<typeof ExplodingInput> = {
  title: 'Spell UI/Exploding Input',
  component: ExplodingInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExplodingInput>

export const Default: Story = {}
