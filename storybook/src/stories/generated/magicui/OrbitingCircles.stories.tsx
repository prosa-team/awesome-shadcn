/**
 * Your product sits at the centre of an ecosystem, and orbiting logos say that faster than a diagram.
 *
 * **Registry:** Magic UI — `@magicui/orbiting-circles` ([docs](https://magicui.design/docs/components/orbiting-circles))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OrbitingCircles } from '@/registries/magicui/ui/orbiting-circles'

const meta: Meta<typeof OrbitingCircles> = {
  title: 'Magic UI/Orbiting Circles',
  component: OrbitingCircles,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OrbitingCircles>

export const Default: Story = {}
