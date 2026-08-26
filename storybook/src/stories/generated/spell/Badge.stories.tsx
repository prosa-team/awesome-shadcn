/**
 * Small labels — "New", "Beta", a plan tier — matched to the rest of this set.
 *
 * **Registry:** Spell UI — `@spell/badge` ([docs](https://spell.sh/docs/badge))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registries/spell/badge'

const meta: Meta<typeof Badge> = {
  title: 'Spell UI/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
