/**
 * You need a carousel where momentum scrolling lands cleanly on a slide.
 *
 * **Registry:** interior.dev — `@interior/snap-carousel` ([docs](https://interior.dev/docs/snap-carousel))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SnapCarousel } from '@/registries/interior/components/interior/snap-carousel'

const meta: Meta<typeof SnapCarousel> = {
  title: 'interior.dev/Snap Carousel',
  component: SnapCarousel,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    label: "Registry component",
  },
}

export default meta
type Story = StoryObj<typeof SnapCarousel>

export const Default: Story = {}
