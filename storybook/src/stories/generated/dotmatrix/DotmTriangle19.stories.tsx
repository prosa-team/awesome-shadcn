/**
 * You need a triangle loader with a rotating searchlight.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-19` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-19.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle19 } from '@/registries/dotmatrix/ui/dotm-triangle-19'

const meta: Meta<typeof DotmTriangle19> = {
  title: 'Dot Matrix/Pivot Ray',
  component: DotmTriangle19,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle19>

export const Default: Story = {}
