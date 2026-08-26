/**
 * A founder letter or about page closes with a signature that draws itself as you reach it.
 *
 * **Registry:** Spell UI — `@spell/signature` ([docs](https://spell.sh/docs/signature))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Signature } from '@/registries/spell/signature'

const meta: Meta<typeof Signature> = {
  title: 'Spell UI/Signature',
  component: Signature,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Signature>

export const Default: Story = {}
