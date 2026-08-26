/**
 * You need one text-entrance API covering fade, slide, blur, and stagger, instead of four components.
 *
 * **Registry:** Magic UI — `@magicui/text-animate` ([docs](https://magicui.design/docs/components/text-animate))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextAnimate } from '@/registries/magicui/ui/text-animate'

const meta: Meta<typeof TextAnimate> = {
  title: 'Magic UI/Text Animate',
  component: TextAnimate,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextAnimate>

export const Default: Story = {}
