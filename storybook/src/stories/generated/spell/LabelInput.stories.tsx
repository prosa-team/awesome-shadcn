/**
 * A signup or waitlist field where the label floats and the password toggle already works.
 *
 * **Registry:** Spell UI — `@spell/label-input` ([docs](https://spell.sh/docs/label-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LabelInput } from '@/registries/spell/label-input'

const meta: Meta<typeof LabelInput> = {
  title: 'Spell UI/Label Input',
  component: LabelInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LabelInput>

export const Default: Story = {}
