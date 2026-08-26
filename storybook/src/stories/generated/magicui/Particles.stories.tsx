/**
 * A hero needs ambient depth that reacts to the pointer without a WebGL dependency.
 *
 * **Registry:** Magic UI — `@magicui/particles` ([docs](https://magicui.design/docs/components/particles))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Particles } from '@/registries/magicui/ui/particles'

const meta: Meta<typeof Particles> = {
  title: 'Magic UI/Particles',
  component: Particles,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Particles>

export const Default: Story = {}
