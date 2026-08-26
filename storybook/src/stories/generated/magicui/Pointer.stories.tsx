/**
 * A demo area needs a custom cursor to signal "this is interactive, try it".
 *
 * **Registry:** Magic UI — `@magicui/pointer` ([docs](https://magicui.design/docs/components/pointer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pointer } from '@/registries/magicui/ui/pointer'

const meta: Meta<typeof Pointer> = {
  title: 'Magic UI/Pointer',
  component: Pointer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pointer>

export const Default: Story = {}
