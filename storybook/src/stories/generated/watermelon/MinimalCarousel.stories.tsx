/**
 * Carousel | Cards expand within the carousel, so browsing and detail live in the same component.
 *
 * **Registry:** Watermelon UI — `@watermelon/minimal-carousel` ([docs](https://ui.watermelon.sh/animated-components/minimal-carousel))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MinimalCarousel } from '@/registries/watermelon/components/ui/minimal-carousel'

const meta: Meta<typeof MinimalCarousel> = {
  title: 'Watermelon UI/Minimal Carousel',
  component: MinimalCarousel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MinimalCarousel>

export const Default: Story = {}
