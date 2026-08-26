/**
 * You need a circular loader with coded pulse tiers.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-10` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-10.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular10 } from '@/registries/dotmatrix/ui/dotm-circular-10'

const meta: Meta<typeof DotmCircular10> = {
  title: 'Dot Matrix/Binary Bloom',
  component: DotmCircular10,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular10>

export const Default: Story = {}
