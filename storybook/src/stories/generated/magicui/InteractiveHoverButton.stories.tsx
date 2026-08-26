/**
 * The primary call to action should transform on hover, not merely darken.
 *
 * **Registry:** Magic UI — `@magicui/interactive-hover-button` ([docs](https://magicui.design/docs/components/interactive-hover-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InteractiveHoverButton } from '@/registries/magicui/ui/interactive-hover-button'

const meta: Meta<typeof InteractiveHoverButton> = {
  title: 'Magic UI/Interactive Hover Button',
  component: InteractiveHoverButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InteractiveHoverButton>

export const Default: Story = {}
