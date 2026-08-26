/**
 * You need a square matrix loader with vertical column motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-6` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-6.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare6 } from '@/registries/dotmatrix/ui/dotm-square-6'

const meta: Meta<typeof DotmSquare6> = {
  title: 'Dot Matrix/Flux Columns',
  component: DotmSquare6,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare6>

export const Default: Story = {}
