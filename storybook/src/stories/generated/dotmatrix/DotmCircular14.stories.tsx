/**
 * You need a circular loader with DNA ladder movement.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-14` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-14.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular14 } from '@/registries/dotmatrix/ui/dotm-circular-14'

const meta: Meta<typeof DotmCircular14> = {
  title: 'Dot Matrix/Rung Shift',
  component: DotmCircular14,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular14>

export const Default: Story = {}
