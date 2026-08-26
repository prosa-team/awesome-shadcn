/**
 * You need a circular loader with mirrored dot pairs.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-18` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-18.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular18 } from '@/registries/dotmatrix/ui/dotm-circular-18'

const meta: Meta<typeof DotmCircular18> = {
  title: 'Dot Matrix/Pulse Pair',
  component: DotmCircular18,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular18>

export const Default: Story = {}
