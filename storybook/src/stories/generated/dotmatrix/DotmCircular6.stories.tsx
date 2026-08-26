/**
 * You need a circular loader with an orbiting energy point.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-6` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-6.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular6 } from '@/registries/dotmatrix/ui/dotm-circular-6'

const meta: Meta<typeof DotmCircular6> = {
  title: 'Dot Matrix/Phase Orb',
  component: DotmCircular6,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular6>

export const Default: Story = {}
