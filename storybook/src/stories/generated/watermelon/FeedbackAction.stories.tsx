/**
 * Micro-interaction | Thumbs up/down on an answer or item, where the response must register instantly.
 *
 * **Registry:** Watermelon UI — `@watermelon/feedback-action` ([docs](https://ui.watermelon.sh/animated-components/feedback-action))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FeedbackAction } from '@/registries/watermelon/components/ui/feedback-action'

const meta: Meta<typeof FeedbackAction> = {
  title: 'Watermelon UI/Feedback Action',
  component: FeedbackAction,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FeedbackAction>

export const Default: Story = {}
