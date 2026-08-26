/**
 * A dark hero needs directional light so the composition has a source instead of a flat gradient.
 *
 * **Registry:** Magic UI — `@magicui/light-rays` ([docs](https://magicui.design/docs/components/light-rays))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LightRays } from '@/registries/magicui/ui/light-rays'

const meta: Meta<typeof LightRays> = {
  title: 'Magic UI/Light Rays',
  component: LightRays,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LightRays>

export const Default: Story = {}
