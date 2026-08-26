import type { Meta, StoryObj } from '@storybook/react-vite'

import { TweetNotFound, TweetSkeleton } from '@/registries/magicui/ui/tweet-card'

/**
 * The states of Magic UI's tweet embed that a browser can render.
 *
 * **Registry:** Magic UI — `@magicui/tweet-card`
 * ([docs](https://magicui.design/docs/components/tweet-card))
 *
 * `TweetCard` itself is an async React Server Component: it awaits
 * `getTweet(id)` and renders on the server. Rendering it in a browser throws,
 * because a client React root cannot await a component. So this story covers
 * the two states that are ordinary client components — the skeleton the
 * Suspense boundary shows while the fetch is in flight, and the fallback when
 * the tweet is gone.
 *
 * In a Next.js app the real usage is `<Suspense fallback={<TweetSkeleton />}>`
 * around `<TweetCard id="..." />`.
 */
const meta: Meta<typeof TweetSkeleton> = {
  title: 'Magic UI/Tweet Card',
  component: TweetSkeleton,
  subcomponents: { TweetNotFound },
  tags: ['autodocs'],
  render: (args) => (
    <div className="w-[32rem] max-w-full">
      <TweetSkeleton {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof TweetSkeleton>

/** The loading state, sized to the card it will be replaced by. */
export const Skeleton: Story = {}

/** A deleted or protected tweet. */
export const NotFound: Story = {
  render: () => (
    <div className="w-[32rem] max-w-full">
      <TweetNotFound />
    </div>
  ),
}
