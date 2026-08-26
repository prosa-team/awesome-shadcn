/**
 * Micro-interaction | A multi-step flow needs the current stage highlighted with a tooltip naming it.
 *
 * **Registry:** Watermelon UI — `@watermelon/step-indicator` ([docs](https://ui.watermelon.sh/animated-components/step-indicator))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StepIndicator } from '@/registries/watermelon/components/ui/step-indicator'

const meta: Meta<typeof StepIndicator> = {
  title: 'Watermelon UI/Step Indicator',
  component: StepIndicator,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StepIndicator>

export const Default: Story = {}
