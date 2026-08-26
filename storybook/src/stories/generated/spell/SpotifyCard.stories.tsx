/**
 * Music is part of the brand — a podcast, an artist page, a soundtrack — and the official embed is too heavy.
 *
 * **Registry:** Spell UI — `@spell/spotify-card` ([docs](https://spell.sh/docs/spotify-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpotifyCard } from '@/registries/spell/spotify-card'

const meta: Meta<typeof SpotifyCard> = {
  title: 'Spell UI/Spotify Card',
  component: SpotifyCard,
  tags: ['autodocs'],
  args: {
    url: "https://ui.shadcn.com",
  },
}

export default meta
type Story = StoryObj<typeof SpotifyCard>

export const Default: Story = {}
