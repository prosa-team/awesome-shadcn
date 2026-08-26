/**
 * One or two words in the hero headline carry the whole brand colour, with the gradient in motion.
 *
 * **Registry:** Magic UI — `@magicui/aurora-text` ([docs](https://magicui.design/docs/components/aurora-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AuroraText } from '@/registries/magicui/ui/aurora-text'

const meta: Meta<typeof AuroraText> = {
  title: 'Magic UI/Aurora Text',
  component: AuroraText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof AuroraText>

export const Default: Story = {}
