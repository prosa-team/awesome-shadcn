/**
 * You need a square matrix loader with a figure-eight trace.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-19` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-19.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare19 } from '@/registries/dotmatrix/ui/dotm-square-19'

const meta: Meta<typeof DotmSquare19> = {
  title: 'Dot Matrix/Infinity Run',
  component: DotmSquare19,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmSquare19>

export const Default: Story = {}
