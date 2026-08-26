/**
 * You need a circular loader with a crescent-like sweep.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-11` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-11.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular11 } from '@/registries/dotmatrix/ui/dotm-circular-11'

const meta: Meta<typeof DotmCircular11> = {
  title: 'Dot Matrix/Lunar Breathe',
  component: DotmCircular11,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular11>

export const Default: Story = {}
