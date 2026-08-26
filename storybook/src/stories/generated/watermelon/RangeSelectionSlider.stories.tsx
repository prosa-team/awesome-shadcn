/**
 * Widgets | A two-handle range with immediate feedback, for filters and budgets.
 *
 * **Registry:** Watermelon UI — `@watermelon/range-selection-slider` ([docs](https://ui.watermelon.sh/animated-components/range-selection-slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RollingNumber } from '@/registries/watermelon/components/ui/range-selection-slider'

const meta: Meta<typeof RollingNumber> = {
  title: 'Watermelon UI/Range Selection Slider',
  component: RollingNumber,
  tags: ['autodocs'],
  args: {
    value: 1,
  },
}

export default meta
type Story = StoryObj<typeof RollingNumber>

export const Default: Story = {}
