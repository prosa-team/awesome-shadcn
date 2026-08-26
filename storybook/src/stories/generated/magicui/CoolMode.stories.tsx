/**
 * A single element gets a particle burst on click, for a playful surface where delight beats restraint.
 *
 * **Registry:** Magic UI — `@magicui/cool-mode` ([docs](https://magicui.design/docs/components/cool-mode))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CoolMode } from '@/registries/magicui/ui/cool-mode'

const meta: Meta<typeof CoolMode> = {
  title: 'Magic UI/Cool Mode',
  component: CoolMode,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof CoolMode>

export const Default: Story = {}
