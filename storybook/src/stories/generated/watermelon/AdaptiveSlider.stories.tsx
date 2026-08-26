/**
 * Sliders | The track's colour carries meaning as the value changes — targets, intensity, health.
 *
 * **Registry:** Watermelon UI — `@watermelon/adaptive-slider` ([docs](https://ui.watermelon.sh/animated-components/adaptive-slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AdaptiveSlider } from '@/registries/watermelon/components/ui/adaptive-slider'

const meta: Meta<typeof AdaptiveSlider> = {
  title: 'Watermelon UI/Adaptive Slider',
  component: AdaptiveSlider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AdaptiveSlider>

export const Default: Story = {}
