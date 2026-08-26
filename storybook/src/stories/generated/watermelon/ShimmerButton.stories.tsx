/**
 * Buttons | A call to action needs a light sweep on hover to read as primary.
 *
 * **Registry:** Watermelon UI — `@watermelon/shimmer-button` ([docs](https://ui.watermelon.sh/animated-components/shimmer-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShimmerButton } from '@/registries/watermelon/components/ui/shimmer-button'

const meta: Meta<typeof ShimmerButton> = {
  title: 'Watermelon UI/Shimmer Button',
  component: ShimmerButton,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof ShimmerButton>

export const Default: Story = {}
