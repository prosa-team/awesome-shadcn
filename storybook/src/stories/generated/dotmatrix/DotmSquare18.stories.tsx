/**
 * You need a square matrix loader that reads like audio levels.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-18` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-18.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare18 } from '@/registries/dotmatrix/ui/dotm-square-18'

const meta: Meta<typeof DotmSquare18> = {
  title: 'Dot Matrix/Sound Bars',
  component: DotmSquare18,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare18>

export const Default: Story = {}
