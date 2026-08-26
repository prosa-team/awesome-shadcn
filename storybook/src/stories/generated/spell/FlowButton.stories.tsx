/**
 * A secondary action should look provisional and inviting — animated dashed border, good for "try it".
 *
 * **Registry:** Spell UI — `@spell/flow-button` ([docs](https://spell.sh/docs/flow-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FlowButton } from '@/registries/spell/flow-button'

const meta: Meta<typeof FlowButton> = {
  title: 'Spell UI/Flow Button',
  component: FlowButton,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof FlowButton>

export const Default: Story = {}
