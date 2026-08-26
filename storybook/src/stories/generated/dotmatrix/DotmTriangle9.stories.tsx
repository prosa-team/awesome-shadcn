/**
 * You need a triangle loader with tiered energy rings.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-9` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-9.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle9 } from '@/registries/dotmatrix/ui/dotm-triangle-9'

const meta: Meta<typeof DotmTriangle9> = {
  title: 'Dot Matrix/Corona Tier',
  component: DotmTriangle9,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle9>

export const Default: Story = {}
