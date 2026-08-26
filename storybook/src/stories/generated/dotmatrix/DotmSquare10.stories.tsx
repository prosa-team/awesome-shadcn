/**
 * You need a square matrix loader with a scanline effect.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-10` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-10.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare10 } from '@/registries/dotmatrix/ui/dotm-square-10'

const meta: Meta<typeof DotmSquare10> = {
  title: 'Dot Matrix/CRT Glide',
  component: DotmSquare10,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare10>

export const Default: Story = {}
