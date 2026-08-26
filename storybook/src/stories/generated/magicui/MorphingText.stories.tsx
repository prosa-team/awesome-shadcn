/**
 * One headline word cycles through several values and letters should melt between them rather than cut.
 *
 * **Registry:** Magic UI — `@magicui/morphing-text` ([docs](https://magicui.design/docs/components/morphing-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MorphingText } from '@/registries/magicui/ui/morphing-text'

const meta: Meta<typeof MorphingText> = {
  title: 'Magic UI/Morphing Text',
  component: MorphingText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MorphingText>

export const Default: Story = {}
