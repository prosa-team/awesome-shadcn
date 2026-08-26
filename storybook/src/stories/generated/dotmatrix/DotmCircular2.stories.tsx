/**
 * You need a circular loader with three orbiting heads.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-2` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-2.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular2 } from '@/registries/dotmatrix/ui/dotm-circular-2'

const meta: Meta<typeof DotmCircular2> = {
  title: 'Dot Matrix/Tri Orbit',
  component: DotmCircular2,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular2>

export const Default: Story = {}
