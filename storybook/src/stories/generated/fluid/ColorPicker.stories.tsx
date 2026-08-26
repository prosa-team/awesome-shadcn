/**
 * Users pick a brand or label colour and need to see the result while dragging, not after releasing.
 *
 * **Registry:** Fluid Functionalism — `@fluid/color-picker` ([docs](https://www.fluidfunctionalism.com/docs/color-picker))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorPicker } from '@/registries/fluid/ui/color-picker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Fluid Functionalism/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Default: Story = {}
