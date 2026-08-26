/**
 * You need a square matrix loader with a single-strand helix.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-17` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-17.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare17 } from '@/registries/dotmatrix/ui/dotm-square-17'

const meta: Meta<typeof DotmSquare17> = {
  title: 'Dot Matrix/Half Helix',
  component: DotmSquare17,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare17>

export const Default: Story = {}
