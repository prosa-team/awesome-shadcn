/**
 * One quote, quietly presented, when the section is not about testimonials.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/testimonial` ([docs](https://chanhdai.com/components/testimonial))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Testimonial } from '@/registries/ncdai/testimonial'

const meta: Meta<typeof Testimonial> = {
  title: 'Chánh Đại Components/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Testimonial>

export const Default: Story = {}
