/**
 * You need poll or vote result bars where the winner animates in last.
 *
 * **Registry:** interior.dev — `@interior/poll-results` ([docs](https://interior.dev/docs/poll-results))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PollResults } from '@/registries/interior/components/interior/poll-results'

const meta: Meta<typeof PollResults> = {
  title: 'interior.dev/Poll Results',
  component: PollResults,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PollResults>

export const Default: Story = {}
