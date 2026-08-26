/**
 * Users have no profile image and you want a stable gradient per name instead of grey initials.
 *
 * **Registry:** Spell UI — `@spell/fallback-avatar` ([docs](https://spell.sh/docs/fallback-avatar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import FallbackAvatar from '@/registries/spell/fallback-avatar'

const meta: Meta<typeof FallbackAvatar> = {
  title: 'Spell UI/Fallback Avatar',
  component: FallbackAvatar,
  tags: ['autodocs'],
  args: {
    name: "Registry component",
  },
}

export default meta
type Story = StoryObj<typeof FallbackAvatar>

export const Default: Story = {}
