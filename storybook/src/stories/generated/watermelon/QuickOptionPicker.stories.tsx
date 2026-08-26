/**
 * Micro-interaction | A short option list rolls into view, for choices made often and quickly.
 *
 * **Registry:** Watermelon UI — `@watermelon/quick-option-picker` ([docs](https://ui.watermelon.sh/animated-components/quick-option-picker))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OptionPicker } from '@/registries/watermelon/components/ui/quick-option-picker'

const meta: Meta<typeof OptionPicker> = {
  title: 'Watermelon UI/Quick Option Picker',
  component: OptionPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OptionPicker>

export const Default: Story = {}
