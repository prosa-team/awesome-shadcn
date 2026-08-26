/**
 * You need a triangle loader with braille-style fills.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-6` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-6.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle6 } from '@/registries/dotmatrix/ui/dotm-triangle-6'

const meta: Meta<typeof DotmTriangle6> = {
  title: 'Dot Matrix/Braille Beat',
  component: DotmTriangle6,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle6>

export const Default: Story = {}
