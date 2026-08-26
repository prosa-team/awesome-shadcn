/**
 * You need a triangle loader with a rising V-shaped ridge.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-16` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-16.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle16 } from '@/registries/dotmatrix/ui/dotm-triangle-16'

const meta: Meta<typeof DotmTriangle16> = {
  title: 'Dot Matrix/Updraft',
  component: DotmTriangle16,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle16>

export const Default: Story = {}
