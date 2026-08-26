/**
 * Tabs | Recurrence is chosen (daily, weekly, monthly) and each choice reveals its own sub-options.
 *
 * **Registry:** Watermelon UI — `@watermelon/frequency-selector` ([docs](https://ui.watermelon.sh/animated-components/frequency-selector))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FrequencySelector } from '@/registries/watermelon/components/ui/frequency-selector'

const meta: Meta<typeof FrequencySelector> = {
  title: 'Watermelon UI/Frequency Selector',
  component: FrequencySelector,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FrequencySelector>

export const Default: Story = {}
