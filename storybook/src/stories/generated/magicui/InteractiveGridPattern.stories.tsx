/**
 * The background should respond to the pointer, making an otherwise static section feel touchable.
 *
 * **Registry:** Magic UI — `@magicui/interactive-grid-pattern` ([docs](https://magicui.design/docs/components/interactive-grid-pattern))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InteractiveGridPattern } from '@/registries/magicui/ui/interactive-grid-pattern'

const meta: Meta<typeof InteractiveGridPattern> = {
  title: 'Magic UI/Interactive Grid Pattern',
  component: InteractiveGridPattern,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InteractiveGridPattern>

export const Default: Story = {}
