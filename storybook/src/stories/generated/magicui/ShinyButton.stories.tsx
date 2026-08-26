/**
 * A secondary action still needs polish, but must not compete with the primary one.
 *
 * **Registry:** Magic UI — `@magicui/shiny-button` ([docs](https://magicui.design/docs/components/shiny-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShinyButton } from '@/registries/magicui/ui/shiny-button'

const meta: Meta<typeof ShinyButton> = {
  title: 'Magic UI/Shiny Button',
  component: ShinyButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShinyButton>

export const Default: Story = {}
