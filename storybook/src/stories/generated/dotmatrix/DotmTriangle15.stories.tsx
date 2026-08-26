/**
 * You need a triangle loader that hands brightness between vertices.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-15` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-15.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle15 } from '@/registries/dotmatrix/ui/dotm-triangle-15'

const meta: Meta<typeof DotmTriangle15> = {
  title: 'Dot Matrix/Tripod Handoff',
  component: DotmTriangle15,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle15>

export const Default: Story = {}
