/**
 * An integration or architecture diagram must show that data actually flows between two nodes.
 *
 * **Registry:** Magic UI — `@magicui/animated-beam` ([docs](https://magicui.design/docs/components/animated-beam))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedBeam } from '@/registries/magicui/ui/animated-beam'

const meta: Meta<typeof AnimatedBeam> = {
  title: 'Magic UI/Animated Beam',
  component: AnimatedBeam,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedBeam>

export const Default: Story = {}
