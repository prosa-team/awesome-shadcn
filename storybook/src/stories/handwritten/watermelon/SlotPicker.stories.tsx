import type { Meta, StoryObj } from '@storybook/react-vite'

import { SlotPicker } from '@/registries/watermelon/components/ui/slot-picker'

const WEEK = [
  {
    id: 'mon',
    label: 'Monday',
    enabled: true,
    slots: [{ id: 'mon-1', from: '09:00', to: '17:00' }],
  },
  {
    id: 'tue',
    label: 'Tuesday',
    enabled: true,
    slots: [
      { id: 'tue-1', from: '09:00', to: '12:00' },
      { id: 'tue-2', from: '13:00', to: '18:00' },
    ],
  },
  { id: 'wed', label: 'Wednesday', enabled: true, slots: [{ id: 'wed-1', from: '10:00', to: '16:00' }] },
  { id: 'thu', label: 'Thursday', enabled: false, slots: [] },
  { id: 'fri', label: 'Friday', enabled: true, slots: [{ id: 'fri-1', from: '09:00', to: '15:00' }] },
  { id: 'sat', label: 'Saturday', enabled: false, slots: [] },
  { id: 'sun', label: 'Sunday', enabled: false, slots: [] },
]

/**
 * Weekly availability: a row per day, each with any number of time ranges.
 *
 * **Registry:** Watermelon UI — `@watermelon/slot-picker`
 * ([docs](https://ui.watermelon.sh/animated-components/slot-picker))
 *
 * The shape is nested — days containing slots — and the interesting states are
 * a day with two ranges and a day switched off, neither of which a uniform
 * generated sample produces.
 */
const meta: Meta<typeof SlotPicker> = {
  title: 'Watermelon UI/Slot Picker',
  component: SlotPicker,
  tags: ['autodocs'],
  args: { days: WEEK },
  render: (args) => (
    <div className="w-[34rem] max-w-full">
      <SlotPicker {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof SlotPicker>

/** A working week with the weekend off. */
export const Default: Story = {}

/** Every day off — the state a new calendar starts in. */
export const NothingAvailable: Story = {
  args: { days: WEEK.map((day) => ({ ...day, enabled: false, slots: [] })) },
}
