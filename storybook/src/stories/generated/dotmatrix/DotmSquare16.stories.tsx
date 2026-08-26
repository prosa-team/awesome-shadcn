/**
 * You need a square matrix loader with a narrow central helix.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-16` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-16.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare16 } from '@/registries/dotmatrix/ui/dotm-square-16'

const meta: Meta<typeof DotmSquare16> = {
  title: 'Dot Matrix/Helix Core',
  component: DotmSquare16,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare16>

export const Default: Story = {}
