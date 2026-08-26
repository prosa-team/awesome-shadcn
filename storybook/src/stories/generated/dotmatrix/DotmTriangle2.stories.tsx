/**
 * You need a triangle loader with apex-to-base wave motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-2` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-2.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle2 } from '@/registries/dotmatrix/ui/dotm-triangle-2'

const meta: Meta<typeof DotmTriangle2> = {
  title: 'Dot Matrix/Altitude Wave',
  component: DotmTriangle2,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle2>

export const Default: Story = {}
