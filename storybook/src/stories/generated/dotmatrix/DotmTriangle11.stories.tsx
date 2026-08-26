/**
 * You need a triangle loader with descending horizontal tiers.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-11` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-11.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle11 } from '@/registries/dotmatrix/ui/dotm-triangle-11'

const meta: Meta<typeof DotmTriangle11> = {
  title: 'Dot Matrix/Shelf Descent',
  component: DotmTriangle11,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle11>

export const Default: Story = {}
