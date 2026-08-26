/**
 * The headline names several audiences and the last word cycles cleanly between them.
 *
 * **Registry:** Magic UI — `@magicui/word-rotate` ([docs](https://magicui.design/docs/components/word-rotate))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WordRotate } from '@/registries/magicui/ui/word-rotate'

const meta: Meta<typeof WordRotate> = {
  title: 'Magic UI/Word Rotate',
  component: WordRotate,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WordRotate>

export const Default: Story = {}
