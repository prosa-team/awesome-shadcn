/**
 * You need a triangle loader that bounces between corners.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-3` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-3.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle3 } from '@/registries/dotmatrix/ui/dotm-triangle-3'

const meta: Meta<typeof DotmTriangle3> = {
  title: 'Dot Matrix/Corner Bounce',
  component: DotmTriangle3,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle3>

export const Default: Story = {}
