/**
 * A headline or prompt example should type itself, mimicking someone using the product.
 *
 * **Registry:** Magic UI — `@magicui/typing-animation` ([docs](https://magicui.design/docs/components/typing-animation))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TypingAnimation } from '@/registries/magicui/ui/typing-animation'

const meta: Meta<typeof TypingAnimation> = {
  title: 'Magic UI/Typing Animation',
  component: TypingAnimation,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TypingAnimation>

export const Default: Story = {}
