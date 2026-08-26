/**
 * You need a circular loader with readable glyph transitions.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-20` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-20.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular20 } from '@/registries/dotmatrix/ui/dotm-circular-20'

const meta: Meta<typeof DotmCircular20> = {
  title: 'Dot Matrix/Glyph Cycle',
  component: DotmCircular20,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular20>

export const Default: Story = {}
