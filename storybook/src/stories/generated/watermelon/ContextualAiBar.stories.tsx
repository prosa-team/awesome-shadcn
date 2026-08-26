/**
 * Micro-interaction | A toolbar morphs between tool icons and an AI prompt field, so both live in one bar.
 *
 * **Registry:** Watermelon UI — `@watermelon/contextual-ai-bar` ([docs](https://ui.watermelon.sh/animated-components/contextual-ai-bar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContextualAIBar } from '@/registries/watermelon/components/ui/contextual-ai-bar'

const meta: Meta<typeof ContextualAIBar> = {
  title: 'Watermelon UI/Contextual AI Bar',
  component: ContextualAIBar,
  tags: ['autodocs'],
  args: {
    musicIcon: "Sample",
    sparkleIcon: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof ContextualAIBar>

export const Default: Story = {}
