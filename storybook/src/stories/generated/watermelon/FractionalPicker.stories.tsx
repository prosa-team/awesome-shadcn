/**
 * Micro-interaction | A precise numeric value is dragged on a ruler with snapping — better than typing on touch.
 *
 * **Registry:** Watermelon UI — `@watermelon/fractional-picker` ([docs](https://ui.watermelon.sh/animated-components/fractional-picker))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FractionalPicker } from '@/registries/watermelon/components/ui/fractional-picker'

const meta: Meta<typeof FractionalPicker> = {
  title: 'Watermelon UI/Fractional Picker',
  component: FractionalPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FractionalPicker>

export const Default: Story = {}
