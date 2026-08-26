/**
 * A headline needs an offset line shadow for editorial weight, with an animated stroke.
 *
 * **Registry:** Magic UI — `@magicui/line-shadow-text` ([docs](https://magicui.design/docs/components/line-shadow-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LineShadowText } from '@/registries/magicui/ui/line-shadow-text'

const meta: Meta<typeof LineShadowText> = {
  title: 'Magic UI/Line Shadow Text',
  component: LineShadowText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LineShadowText>

export const Default: Story = {}
