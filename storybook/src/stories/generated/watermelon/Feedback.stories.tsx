/**
 * Micro-interaction | Collecting a rating or comment inline, with morphing icons and a dark mode that holds up.
 *
 * **Registry:** Watermelon UI — `@watermelon/feedback` ([docs](https://ui.watermelon.sh/animated-components/feedback))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FeedbackComponent } from '@/registries/watermelon/components/ui/feedback'

const meta: Meta<typeof FeedbackComponent> = {
  title: 'Watermelon UI/Feedback',
  component: FeedbackComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FeedbackComponent>

export const Default: Story = {}
