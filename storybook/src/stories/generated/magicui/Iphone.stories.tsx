/**
 * A mobile screenshot needs an iPhone frame with correct proportions and notch.
 *
 * **Registry:** Magic UI — `@magicui/iphone` ([docs](https://magicui.design/docs/components/iphone))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Iphone } from '@/registries/magicui/ui/iphone'

const meta: Meta<typeof Iphone> = {
  title: 'Magic UI/iPhone',
  component: Iphone,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Iphone>

export const Default: Story = {}
