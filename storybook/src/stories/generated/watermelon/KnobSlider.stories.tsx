/**
 * Sliders | A radial dial fits where a linear track does not, and rotation suits the parameter.
 *
 * **Registry:** Watermelon UI — `@watermelon/knob-slider` ([docs](https://ui.watermelon.sh/animated-components/knob-slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { KnobSlider } from '@/registries/watermelon/components/ui/knob-slider'

const meta: Meta<typeof KnobSlider> = {
  title: 'Watermelon UI/Knob Slider',
  component: KnobSlider,
  tags: ['autodocs'],
  args: {
    value: 1,
  },
}

export default meta
type Story = StoryObj<typeof KnobSlider>

export const Default: Story = {}
