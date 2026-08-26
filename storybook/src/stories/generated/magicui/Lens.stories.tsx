/**
 * Detail matters in an image (a dashboard screenshot, a product photo) and users should magnify it in place.
 *
 * **Registry:** Magic UI — `@magicui/lens` ([docs](https://magicui.design/docs/components/lens))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Lens } from '@/registries/magicui/ui/lens'

const meta: Meta<typeof Lens> = {
  title: 'Magic UI/Lens',
  component: Lens,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof Lens>

export const Default: Story = {}
