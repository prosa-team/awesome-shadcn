import type { Meta, StoryObj } from '@storybook/react-vite'

import { WheelPicker, WheelPickerWrapper } from '@/registries/ncdai/wheel-picker'

const hours = Array.from({ length: 12 }, (_, i) => ({
  label: String(i + 1).padStart(2, '0'),
  value: String(i + 1).padStart(2, '0'),
}))

const minutes = Array.from({ length: 12 }, (_, i) => ({
  label: String(i * 5).padStart(2, '0'),
  value: String(i * 5).padStart(2, '0'),
}))

const meridiem = [
  { label: 'AM', value: 'AM' },
  { label: 'PM', value: 'PM' },
]

/**
 * An iOS-style wheel picker, driven by drag, wheel, or keyboard.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/react-wheel-picker`
 * ([docs](https://chanhdai.com/components/react-wheel-picker))
 *
 * A wheel is one column, and the control people recognise is several wheels
 * sharing a `WheelPickerWrapper`. Both parts are needed for the component to
 * mean anything.
 */
const meta: Meta<typeof WheelPicker> = {
  title: 'Chánh Đại Components/React Wheel Picker',
  component: WheelPicker,
  subcomponents: { WheelPickerWrapper },
  tags: ['autodocs'],
  args: { options: hours, defaultValue: '09' },
  render: (args) => (
    <WheelPickerWrapper className="w-32">
      <WheelPicker {...args} />
    </WheelPickerWrapper>
  ),
}

export default meta
type Story = StoryObj<typeof WheelPicker>

/** A single wheel. */
export const Default: Story = {}

/** Three wheels: the time picker this component exists to build. */
export const TimePicker: Story = {
  render: () => (
    <WheelPickerWrapper className="w-64">
      <WheelPicker options={hours} defaultValue="09" />
      <WheelPicker options={minutes} defaultValue="30" />
      <WheelPicker options={meridiem} defaultValue="AM" infinite={false} />
    </WheelPickerWrapper>
  ),
}

/** Looping off, so the ends of the list are reachable and final. */
export const Finite: Story = { args: { infinite: false } }

/** A taller wheel showing more context around the selection. */
export const TallerWheel: Story = { args: { visibleCount: 20 } }
