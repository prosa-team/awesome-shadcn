/**
 * Flat gradients band on real displays; an SVG turbulence layer removes the plastic look.
 *
 * **Registry:** Magic UI — `@magicui/noise-texture` ([docs](https://magicui.design/docs/components/noise-texture))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { NoiseTexture } from '@/registries/magicui/ui/noise-texture'

const meta: Meta<typeof NoiseTexture> = {
  title: 'Magic UI/Noise Texture',
  component: NoiseTexture,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NoiseTexture>

export const Default: Story = {}
