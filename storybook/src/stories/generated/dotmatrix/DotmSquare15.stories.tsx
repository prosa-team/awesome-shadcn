/**
 * You need a square matrix loader with a DNA-like helix.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-15` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-15.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare15 } from '@/registries/dotmatrix/ui/dotm-square-15'

const meta: Meta<typeof DotmSquare15> = {
  title: 'Dot Matrix/Helix Glow',
  component: DotmSquare15,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare15>

export const Default: Story = {}
