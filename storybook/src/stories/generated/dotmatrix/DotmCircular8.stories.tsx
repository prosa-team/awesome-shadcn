/**
 * You need a circular loader with a center pulse.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-8` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-8.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular8 } from '@/registries/dotmatrix/ui/dotm-circular-8'

const meta: Meta<typeof DotmCircular8> = {
  title: 'Dot Matrix/Heart Pulse',
  component: DotmCircular8,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular8>

export const Default: Story = {}
