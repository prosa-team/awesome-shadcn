/**
 * Micro-interaction | A one-tap reaction must confirm in real time, for high-frequency, low-stakes input.
 *
 * **Registry:** Watermelon UI — `@watermelon/quick-feedback` ([docs](https://ui.watermelon.sh/animated-components/quick-feedback))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { QuickFeedback } from '@/registries/watermelon/components/ui/quick-feedback'

const meta: Meta<typeof QuickFeedback> = {
  title: 'Watermelon UI/Quick Feedback',
  component: QuickFeedback,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuickFeedback>

export const Default: Story = {}
