/**
 * You need a circular loader with a soft plasma sweep.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-3` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-3.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular3 } from '@/registries/dotmatrix/ui/dotm-circular-3'

const meta: Meta<typeof DotmCircular3> = {
  title: 'Dot Matrix/Plasma Veil',
  component: DotmCircular3,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular3>

export const Default: Story = {}
