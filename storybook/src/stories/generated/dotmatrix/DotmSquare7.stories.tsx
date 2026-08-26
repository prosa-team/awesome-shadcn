/**
 * You need a square matrix loader with a stacking block feel.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-7` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-7.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare7 } from '@/registries/dotmatrix/ui/dotm-square-7'

const meta: Meta<typeof DotmSquare7> = {
  title: 'Dot Matrix/Block Drop',
  component: DotmSquare7,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare7>

export const Default: Story = {}
