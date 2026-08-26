/**
 * A card should catch light diagonally on hover — glass-like, done with CSS only, no extra keyframes.
 *
 * **Registry:** Magic UI — `@magicui/glare-hover` ([docs](https://magicui.design/docs/components/glare-hover))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GlareHover } from '@/registries/magicui/ui/glare-hover'

const meta: Meta<typeof GlareHover> = {
  title: 'Magic UI/Glare Hover',
  component: GlareHover,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GlareHover>

export const Default: Story = {}
