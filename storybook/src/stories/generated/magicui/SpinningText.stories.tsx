/**
 * A circular text badge rotates around a mark or a scroll cue.
 *
 * **Registry:** Magic UI — `@magicui/spinning-text` ([docs](https://magicui.design/docs/components/spinning-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpinningText } from '@/registries/magicui/ui/spinning-text'

const meta: Meta<typeof SpinningText> = {
  title: 'Magic UI/Spinning Text',
  component: SpinningText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpinningText>

export const Default: Story = {}
