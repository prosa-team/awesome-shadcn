/**
 * Letters flip in 3D on hover with a stagger, for a playful headline.
 *
 * **Registry:** Magic UI — `@magicui/text-3d-flip` ([docs](https://magicui.design/docs/components/text-3d-flip))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Text3DFlip from '@/registries/magicui/ui/text-3d-flip'

const meta: Meta<typeof Text3DFlip> = {
  title: 'Magic UI/Text 3D Flip',
  component: Text3DFlip,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof Text3DFlip>

export const Default: Story = {}
