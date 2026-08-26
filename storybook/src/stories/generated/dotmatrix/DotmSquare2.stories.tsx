/**
 * You need a square matrix loader with a stepped snake motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-2` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-2.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare2 } from '@/registries/dotmatrix/ui/dotm-square-2'

const meta: Meta<typeof DotmSquare2> = {
  title: 'Dot Matrix/Pulse Ladder',
  component: DotmSquare2,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare2>

export const Default: Story = {}
