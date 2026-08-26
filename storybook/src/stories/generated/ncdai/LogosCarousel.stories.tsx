/**
 * More customer logos than fit the row: cycle them column by column in a staggered wave rather than scrolling a marquee.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/logos-carousel` ([docs](https://chanhdai.com/components/logos-carousel))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogosCarousel } from '@/registries/ncdai/logos-carousel'

const meta: Meta<typeof LogosCarousel> = {
  title: 'Chánh Đại Components/Logos Carousel',
  component: LogosCarousel,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof LogosCarousel>

export const Default: Story = {}
