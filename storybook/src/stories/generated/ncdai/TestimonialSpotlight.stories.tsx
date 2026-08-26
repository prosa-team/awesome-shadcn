/**
 * One customer story deserves editorial weight and should not sit in a grid of equals.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/testimonial-spotlight` ([docs](https://chanhdai.com/components/testimonial-spotlight))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TestimonialSpotlight } from '@/registries/ncdai/testimonial-spotlight'

const meta: Meta<typeof TestimonialSpotlight> = {
  title: 'Chánh Đại Components/Testimonial Spotlight',
  component: TestimonialSpotlight,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof TestimonialSpotlight>

export const Default: Story = {}
