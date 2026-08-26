/**
 * You need a square matrix loader with braille-like glyph changes.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-9` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-9.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare9 } from '@/registries/dotmatrix/ui/dotm-square-9'

const meta: Meta<typeof DotmSquare9> = {
  title: 'Dot Matrix/Glyph Pulse',
  component: DotmSquare9,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare9>

export const Default: Story = {}
