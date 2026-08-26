/**
 * You need a square matrix loader with radial bloom motifs.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-14` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-14.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare14 } from '@/registries/dotmatrix/ui/dotm-square-14'

const meta: Meta<typeof DotmSquare14> = {
  title: 'Dot Matrix/Prism Bloom',
  component: DotmSquare14,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare14>

export const Default: Story = {}
