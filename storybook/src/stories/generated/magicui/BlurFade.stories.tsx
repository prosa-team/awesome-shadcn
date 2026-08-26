/**
 * Sections should resolve as the user scrolls to them, giving a long page rhythm instead of one flat reveal.
 *
 * **Registry:** Magic UI — `@magicui/blur-fade` ([docs](https://magicui.design/docs/components/blur-fade))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BlurFade } from '@/registries/magicui/ui/blur-fade'

const meta: Meta<typeof BlurFade> = {
  title: 'Magic UI/Blur Fade',
  component: BlurFade,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BlurFade>

export const Default: Story = {}
