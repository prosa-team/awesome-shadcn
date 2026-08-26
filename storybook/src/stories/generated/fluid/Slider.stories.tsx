/**
 * A value is tuned by feel, not typed, and the handle must track the pointer without lag.
 *
 * **Registry:** Fluid Functionalism — `@fluid/slider` ([docs](https://www.fluidfunctionalism.com/docs/slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Slider } from '@/registries/fluid/components/ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'Fluid Functionalism/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {}
