/**
 * Micro-interaction | A value is scrubbed with fine control, for media position or precise ranges.
 *
 * **Registry:** Watermelon UI — `@watermelon/scrub-slider` ([docs](https://ui.watermelon.sh/animated-components/scrub-slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrubSlider } from '@/registries/watermelon/components/ui/scrub-slider'

const meta: Meta<typeof ScrubSlider> = {
  title: 'Watermelon UI/Scrub Slider',
  component: ScrubSlider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrubSlider>

export const Default: Story = {}
