/**
 * You need a square matrix loader with outer-ring chase motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-20` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-20.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare20 } from '@/registries/dotmatrix/ui/dotm-square-20'

const meta: Meta<typeof DotmSquare20> = {
  title: 'Dot Matrix/Mobius Run',
  component: DotmSquare20,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare20>

export const Default: Story = {}
