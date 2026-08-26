/**
 * You need a circular loader with pinwheel motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-5` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-5.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular5 } from '@/registries/dotmatrix/ui/dotm-circular-5'

const meta: Meta<typeof DotmCircular5> = {
  title: 'Dot Matrix/Nova Wheel',
  component: DotmCircular5,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular5>

export const Default: Story = {}
