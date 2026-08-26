/**
 * You need a square matrix loader that spirals toward the center.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-3` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-3.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare3 } from '@/registries/dotmatrix/ui/dotm-square-3'

const meta: Meta<typeof DotmSquare3> = {
  title: 'Dot Matrix/Core Spiral',
  component: DotmSquare3,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare3>

export const Default: Story = {}
