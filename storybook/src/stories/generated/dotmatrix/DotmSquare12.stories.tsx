/**
 * You need a square matrix loader that expands from one origin point.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-12` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-12.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare12 } from '@/registries/dotmatrix/ui/dotm-square-12'

const meta: Meta<typeof DotmSquare12> = {
  title: 'Dot Matrix/Origin Wave',
  component: DotmSquare12,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare12>

export const Default: Story = {}
