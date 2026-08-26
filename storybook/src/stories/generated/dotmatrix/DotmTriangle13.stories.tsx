/**
 * You need a triangle loader with a row-wise zigzag snake.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-13` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-13.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle13 } from '@/registries/dotmatrix/ui/dotm-triangle-13'

const meta: Meta<typeof DotmTriangle13> = {
  title: 'Dot Matrix/Serpent Zip',
  component: DotmTriangle13,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle13>

export const Default: Story = {}
