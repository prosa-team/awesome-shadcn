/**
 * Background work is running and the app needs a house-style waiting state instead of a foreign spinner.
 *
 * **Registry:** Fluid Functionalism — `@fluid/thinking-indicator` ([docs](https://www.fluidfunctionalism.com/docs/thinking-indicator))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThinkingIndicator } from '@/registries/fluid/ui/thinking-indicator'

const meta: Meta<typeof ThinkingIndicator> = {
  title: 'Fluid Functionalism/ThinkingIndicator',
  component: ThinkingIndicator,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ThinkingIndicator>

export const Default: Story = {}
