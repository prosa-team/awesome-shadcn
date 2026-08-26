/**
 * You need a triangle loader with skewed ridge motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-12` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-12.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle12 } from '@/registries/dotmatrix/ui/dotm-triangle-12'

const meta: Meta<typeof DotmTriangle12> = {
  title: 'Dot Matrix/Skew Drift',
  component: DotmTriangle12,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle12>

export const Default: Story = {}
