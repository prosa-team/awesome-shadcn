/**
 * You need a triangle loader with a crossing loop path.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-17` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-17.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle17 } from '@/registries/dotmatrix/ui/dotm-triangle-17'

const meta: Meta<typeof DotmTriangle17> = {
  title: 'Dot Matrix/Infinity Trace',
  component: DotmTriangle17,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle17>

export const Default: Story = {}
