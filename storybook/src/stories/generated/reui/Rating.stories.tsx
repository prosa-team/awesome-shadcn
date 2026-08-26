/**
 * Users score something and half-steps or hover previews are part of the interaction.
 *
 * **Registry:** ReUI — `@reui/rating` ([docs](https://reui.io/components/rating))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Rating } from '@/registries/reui/components/reui/rating'

const meta: Meta<typeof Rating> = {
  title: 'ReUI/Rating',
  component: Rating,
  tags: ['autodocs'],
  args: {
    rating: 1,
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {}
