/**
 * A mobile web flow where a native-feeling iOS wheel beats a dropdown for dates, times, or durations.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/wheel-picker` ([docs](https://chanhdai.com/components/react-wheel-picker))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WheelPicker } from '@/registries/ncdai/wheel-picker'

const meta: Meta<typeof WheelPicker> = {
  title: 'Chánh Đại Components/React Wheel Picker',
  component: WheelPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WheelPicker>

export const Default: Story = {}
