/**
 * Interaction | A gesture-driven card rail with spring rotation, for touch-first browsing.
 *
 * **Registry:** Watermelon UI — `@watermelon/carousel-slider` ([docs](https://ui.watermelon.sh/animated-components/carousel-slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CarouselSlider } from '@/registries/watermelon/components/ui/carousel-slider'

const meta: Meta<typeof CarouselSlider> = {
  title: 'Watermelon UI/Carousel Slider',
  component: CarouselSlider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CarouselSlider>

export const Default: Story = {}
