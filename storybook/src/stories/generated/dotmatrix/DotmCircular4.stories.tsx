/**
 * You need a circular loader with a rotating radar beam.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-4` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-4.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular4 } from '@/registries/dotmatrix/ui/dotm-circular-4'

const meta: Meta<typeof DotmCircular4> = {
  title: 'Dot Matrix/Radar Arc',
  component: DotmCircular4,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular4>

export const Default: Story = {}
