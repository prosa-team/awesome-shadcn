/**
 * You need a square matrix loader with concentric ripple motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-11` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-11.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare11 } from '@/registries/dotmatrix/ui/dotm-square-11'

const meta: Meta<typeof DotmSquare11> = {
  title: 'Dot Matrix/Echo Ring',
  component: DotmSquare11,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare11>

export const Default: Story = {}
