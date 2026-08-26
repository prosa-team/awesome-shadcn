/**
 * Interaction | Availability is chosen as time slots, with toggles that make taken and free unmistakable.
 *
 * **Registry:** Watermelon UI — `@watermelon/slot-picker` ([docs](https://ui.watermelon.sh/animated-components/slot-picker))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SlotPicker } from '@/registries/watermelon/components/ui/slot-picker'

const meta: Meta<typeof SlotPicker> = {
  title: 'Watermelon UI/Slot Picker',
  component: SlotPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SlotPicker>

export const Default: Story = {}
