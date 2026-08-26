/**
 * You need a triangle loader with spokes from the center.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-1` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-1.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle1 } from '@/registries/dotmatrix/ui/dotm-triangle-1'

const meta: Meta<typeof DotmTriangle1> = {
  title: 'Dot Matrix/Core Spokes',
  component: DotmTriangle1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle1>

export const Default: Story = {}
