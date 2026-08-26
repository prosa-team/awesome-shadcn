/**
 * Real posts are the testimonials, and the embedded X widget would cost a third-party script and a layout shift.
 *
 * **Registry:** Magic UI — `@magicui/tweet-card` ([docs](https://magicui.design/docs/components/tweet-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TweetCard } from '@/registries/magicui/ui/tweet-card'

const meta: Meta<typeof TweetCard> = {
  title: 'Magic UI/Tweet Card',
  component: TweetCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TweetCard>

export const Default: Story = {}
