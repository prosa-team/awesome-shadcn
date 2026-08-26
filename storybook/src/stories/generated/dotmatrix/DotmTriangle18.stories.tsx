/**
 * You need a triangle loader with a hollow pulse.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-18` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-18.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle18 } from '@/registries/dotmatrix/ui/dotm-triangle-18'

const meta: Meta<typeof DotmTriangle18> = {
  title: 'Dot Matrix/Hollow Shell',
  component: DotmTriangle18,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle18>

export const Default: Story = {}
