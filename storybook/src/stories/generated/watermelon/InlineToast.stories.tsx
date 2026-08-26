/**
 * Micro-interaction | Feedback belongs next to the action rather than in a screen corner, with a copy action attached.
 *
 * **Registry:** Watermelon UI — `@watermelon/inline-toast` ([docs](https://ui.watermelon.sh/animated-components/inline-toast))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineToast } from '@/registries/watermelon/components/ui/inline-toast'

const meta: Meta<typeof InlineToast> = {
  title: 'Watermelon UI/Inline Toast',
  component: InlineToast,
  tags: ['autodocs'],
  args: {
    code: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof InlineToast>

export const Default: Story = {}
