/**
 * Micro-interaction | Progress needs a label that changes with the phase, because a bare percentage says too little.
 *
 * **Registry:** Watermelon UI — `@watermelon/labeled-progress-indicator` ([docs](https://ui.watermelon.sh/animated-components/labeled-progress-indicator))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LabeledProgressIndicator } from '@/registries/watermelon/components/ui/labeled-progress-indicator'

const meta: Meta<typeof LabeledProgressIndicator> = {
  title: 'Watermelon UI/Labeled Progress Indicator',
  component: LabeledProgressIndicator,
  tags: ['autodocs'],
  args: {
    labels: ["Sample", "Sample 2", "Sample 3"],
  },
}

export default meta
type Story = StoryObj<typeof LabeledProgressIndicator>

export const Default: Story = {}
