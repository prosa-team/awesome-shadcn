/**
 * The wait is long enough that the user should see *which* step is running, not just that something is.
 *
 * **Registry:** Fluid Functionalism — `@fluid/thinking-steps` ([docs](https://www.fluidfunctionalism.com/docs/thinking-steps))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThinkingSteps } from '@/registries/fluid/components/ui/thinking-steps'

const meta: Meta<typeof ThinkingSteps> = {
  title: 'Fluid Functionalism/ThinkingSteps',
  component: ThinkingSteps,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ThinkingSteps>

export const Default: Story = {}
