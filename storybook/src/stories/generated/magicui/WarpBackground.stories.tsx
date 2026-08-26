/**
 * A section background should warp toward a vanishing point, suggesting speed.
 *
 * **Registry:** Magic UI — `@magicui/warp-background` ([docs](https://magicui.design/docs/components/warp-background))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WarpBackground } from '@/registries/magicui/ui/warp-background'

const meta: Meta<typeof WarpBackground> = {
  title: 'Magic UI/Warp Background',
  component: WarpBackground,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof WarpBackground>

export const Default: Story = {}
