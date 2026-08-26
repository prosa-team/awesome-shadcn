/**
 * An install command or code sits on the marketing page and must be copyable with feedback.
 *
 * **Registry:** Spell UI — `@spell/copy-button` ([docs](https://spell.sh/docs/copy-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CopyButton } from '@/registries/spell/copy-button'

const meta: Meta<typeof CopyButton> = {
  title: 'Spell UI/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {}
