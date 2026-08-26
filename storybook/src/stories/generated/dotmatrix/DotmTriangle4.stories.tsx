/**
 * You need a triangle loader with three perimeter heads.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-4` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-4.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle4 } from '@/registries/dotmatrix/ui/dotm-triangle-4'

const meta: Meta<typeof DotmTriangle4> = {
  title: 'Dot Matrix/Vertex Chase',
  component: DotmTriangle4,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle4>

export const Default: Story = {}
