/**
 * You need a circular loader with grouped glyph motifs.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-15` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-15.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular15 } from '@/registries/dotmatrix/ui/dotm-circular-15'

const meta: Meta<typeof DotmCircular15> = {
  title: 'Dot Matrix/Glyph Cluster',
  component: DotmCircular15,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular15>

export const Default: Story = {}
