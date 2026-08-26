/**
 * You need a triangle loader with diagonal harmonic bands.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-7` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-7.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle7 } from '@/registries/dotmatrix/ui/dotm-triangle-7'

const meta: Meta<typeof DotmTriangle7> = {
  title: 'Dot Matrix/Oblique Weave',
  component: DotmTriangle7,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle7>

export const Default: Story = {}
