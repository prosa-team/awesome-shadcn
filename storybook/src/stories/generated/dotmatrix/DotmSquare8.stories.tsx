/**
 * You need a square matrix loader with stacked columns and a flash beat.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-8` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-8.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare8 } from '@/registries/dotmatrix/ui/dotm-square-8'

const meta: Meta<typeof DotmSquare8> = {
  title: 'Dot Matrix/Strobe Stack',
  component: DotmSquare8,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare8>

export const Default: Story = {}
