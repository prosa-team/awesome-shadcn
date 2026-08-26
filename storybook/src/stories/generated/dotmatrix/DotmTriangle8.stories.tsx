/**
 * You need a triangle loader with left-right wing emphasis.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-8` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-8.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle8 } from '@/registries/dotmatrix/ui/dotm-triangle-8'

const meta: Meta<typeof DotmTriangle8> = {
  title: 'Dot Matrix/Wing Metronome',
  component: DotmTriangle8,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle8>

export const Default: Story = {}
