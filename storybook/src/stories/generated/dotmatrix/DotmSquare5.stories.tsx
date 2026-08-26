/**
 * You need a square matrix loader with alternating diagonal movement.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-5` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-5.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare5 } from '@/registries/dotmatrix/ui/dotm-square-5'

const meta: Meta<typeof DotmSquare5> = {
  title: 'Dot Matrix/Prism Sweep',
  component: DotmSquare5,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare5>

export const Default: Story = {}
