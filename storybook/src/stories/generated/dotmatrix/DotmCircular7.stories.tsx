/**
 * You need a circular loader with alternating scan gates.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-7` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-7.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular7 } from '@/registries/dotmatrix/ui/dotm-circular-7'

const meta: Meta<typeof DotmCircular7> = {
  title: 'Dot Matrix/Gate Shift',
  component: DotmCircular7,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular7>

export const Default: Story = {}
