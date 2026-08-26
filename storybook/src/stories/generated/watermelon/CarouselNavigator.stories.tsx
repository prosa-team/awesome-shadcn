/**
 * Micro-interaction | Carousel controls adapt their background to the active slide and sync with its progress.
 *
 * **Registry:** Watermelon UI — `@watermelon/carousel-navigator` ([docs](https://ui.watermelon.sh/animated-components/carousel-navigator))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CarouselNavigator } from '@/registries/watermelon/components/ui/carousel-navigator'

const meta: Meta<typeof CarouselNavigator> = {
  title: 'Watermelon UI/Carousel Navigator',
  component: CarouselNavigator,
  tags: ['autodocs'],
  args: {
    currentIndex: 1,
    onIndexChange: () => {},
  },
}

export default meta
type Story = StoryObj<typeof CarouselNavigator>

export const Default: Story = {}
