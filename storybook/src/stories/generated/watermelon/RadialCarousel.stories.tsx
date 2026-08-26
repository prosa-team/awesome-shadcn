/**
 * Carousel | Items are browsed by dragging around an arc — for showcases where a straight rail feels flat.
 *
 * **Registry:** Watermelon UI — `@watermelon/radial-carousel` ([docs](https://ui.watermelon.sh/animated-components/radial-carousel))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadialCarousel } from '@/registries/watermelon/components/ui/radial-carousel'

const meta: Meta<typeof RadialCarousel> = {
  title: 'Watermelon UI/Radial Carousel',
  component: RadialCarousel,
  tags: ['autodocs'],
  args: {
    items: [{ id: "item-1", url: "https://ui.shadcn.com", title: "Registry component" }, { id: "item-1 2", url: "https://ui.shadcn.com 2", title: "Registry component 2" }, { id: "item-1 3", url: "https://ui.shadcn.com 3", title: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof RadialCarousel>

export const Default: Story = {}
