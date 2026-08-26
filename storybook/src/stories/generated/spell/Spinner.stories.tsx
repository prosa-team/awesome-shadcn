/**
 * A loading state on a marketing surface that should match this set rather than the app's.
 *
 * **Registry:** Spell UI — `@spell/spinner` ([docs](https://spell.sh/docs/spinner))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@/registries/spell/spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Spell UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
