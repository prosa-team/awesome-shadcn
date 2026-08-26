/**
 * You need a square matrix loader with a compact rotor.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-13` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-13.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare13 } from '@/registries/dotmatrix/ui/dotm-square-13'

const meta: Meta<typeof DotmSquare13> = {
  title: 'Dot Matrix/Core Rotor',
  component: DotmSquare13,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare13>

export const Default: Story = {}
