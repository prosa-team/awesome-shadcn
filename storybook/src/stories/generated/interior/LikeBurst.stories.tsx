/**
 * You need an optimistic like/favorite animation that stays correct under rapid taps.
 *
 * **Registry:** interior.dev — `@interior/like-burst` ([docs](https://interior.dev/docs/like-burst))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LikeBurst } from '@/registries/interior/components/interior/like-burst'

const meta: Meta<typeof LikeBurst> = {
  title: 'interior.dev/Like Burst',
  component: LikeBurst,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LikeBurst>

export const Default: Story = {}
