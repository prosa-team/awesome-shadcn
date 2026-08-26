/**
 * You need a square matrix loader with opposing ring motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-4` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-4.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare4 } from '@/registries/dotmatrix/ui/dotm-square-4'

const meta: Meta<typeof DotmSquare4> = {
  title: 'Dot Matrix/Twin Orbit',
  component: DotmSquare4,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare4>

export const Default: Story = {}
