/**
 * You need a circular loader with a twin-helix rhythm.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-13` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-13.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular13 } from '@/registries/dotmatrix/ui/dotm-circular-13'

const meta: Meta<typeof DotmCircular13> = {
  title: 'Dot Matrix/Twin Helix',
  component: DotmCircular13,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular13>

export const Default: Story = {}
