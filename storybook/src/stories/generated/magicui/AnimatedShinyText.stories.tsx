/**
 * A small label needs a slow sweep of light to look interactive, typically a "What's new" link.
 *
 * **Registry:** Magic UI — `@magicui/animated-shiny-text` ([docs](https://magicui.design/docs/components/animated-shiny-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedShinyText } from '@/registries/magicui/ui/animated-shiny-text'

const meta: Meta<typeof AnimatedShinyText> = {
  title: 'Magic UI/Animated Shiny Text',
  component: AnimatedShinyText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedShinyText>

export const Default: Story = {}
