/**
 * A quote that must be verifiable — author, role, and a link back to the original post.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/testimonial-2` ([docs](https://chanhdai.com/components/testimonial-2))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Testimonial2 } from '@/registries/ncdai/testimonial-2'

const meta: Meta<typeof Testimonial2> = {
  title: 'Chánh Đại Components/Testimonial 2',
  component: Testimonial2,
  tags: ['autodocs'],
  args: {
    authorName: "Sample",
    authorTagline: "Sample",
    url: "https://ui.shadcn.com",
    quote: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof Testimonial2>

export const Default: Story = {}
