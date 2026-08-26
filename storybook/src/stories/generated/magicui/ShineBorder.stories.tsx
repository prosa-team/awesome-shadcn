/**
 * A card border should shine periodically, marking it as featured without the constant motion of a beam.
 *
 * **Registry:** Magic UI — `@magicui/shine-border` ([docs](https://magicui.design/docs/components/shine-border))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShineBorder } from '@/registries/magicui/ui/shine-border'

const meta: Meta<typeof ShineBorder> = {
  title: 'Magic UI/Shine Border',
  component: ShineBorder,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShineBorder>

export const Default: Story = {}
