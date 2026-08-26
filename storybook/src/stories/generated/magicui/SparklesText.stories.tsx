/**
 * A word should sparkle — typically the AI or "magic" feature name in the hero.
 *
 * **Registry:** Magic UI — `@magicui/sparkles-text` ([docs](https://magicui.design/docs/components/sparkles-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SparklesText } from '@/registries/magicui/ui/sparkles-text'

const meta: Meta<typeof SparklesText> = {
  title: 'Magic UI/Sparkles Text',
  component: SparklesText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SparklesText>

export const Default: Story = {}
