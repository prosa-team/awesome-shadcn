import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FrequencySelector } from '@/registries/watermelon/components/ui/frequency-selector'
import type { FrequencyData } from '@/registries/watermelon/components/ui/frequency-selector'

/**
 * A recurrence picker: a frequency, then the sub-option that frequency implies.
 *
 * **Registry:** Watermelon UI — `@watermelon/frequency-selector`
 * ([docs](https://ui.watermelon.sh/animated-components/frequency-selector))
 *
 * Fully controlled — `value` in, `onChange` out — so a story that drops the
 * handler shows a picker that never changes.
 */
const Controlled = ({ initial }: { initial: FrequencyData }) => {
  const [value, setValue] = useState<FrequencyData>(initial)
  return <FrequencySelector value={value} onChange={setValue} />
}

const meta: Meta<typeof FrequencySelector> = {
  title: 'Watermelon UI/Frequency Selector',
  component: FrequencySelector,
  tags: ['autodocs'],
  render: () => <Controlled initial={{ type: 'Weekly', subValue: 'Monday' }} />,
}

export default meta
type Story = StoryObj<typeof FrequencySelector>

/** Weekly, with a weekday chosen. */
export const Default: Story = {}

/** Daily, the one frequency with no sub-option to pick. */
export const Daily: Story = { render: () => <Controlled initial={{ type: 'Daily' }} /> }

/** Yearly, the longest sub-option list. */
export const Yearly: Story = {
  render: () => <Controlled initial={{ type: 'Yearly', subValue: 'January' }} />,
}
