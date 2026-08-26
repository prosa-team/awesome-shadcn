/**
 * You need a triangle loader with strict column movement.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-10` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-10.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle10 } from '@/registries/dotmatrix/ui/dotm-triangle-10'

const meta: Meta<typeof DotmTriangle10> = {
  title: 'Dot Matrix/Column Rake',
  component: DotmTriangle10,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle10>

export const Default: Story = {}
