/**
 * You need a triangle loader with two perimeter chasers.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-20` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-20.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle20 } from '@/registries/dotmatrix/ui/dotm-triangle-20'

const meta: Meta<typeof DotmTriangle20> = {
  title: 'Dot Matrix/Twin Perimeter',
  component: DotmTriangle20,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle20>

export const Default: Story = {}
