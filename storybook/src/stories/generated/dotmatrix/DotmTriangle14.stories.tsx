/**
 * You need a triangle loader with a vertical beam sweep.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-14` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-14.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle14 } from '@/registries/dotmatrix/ui/dotm-triangle-14'

const meta: Meta<typeof DotmTriangle14> = {
  title: 'Dot Matrix/Pillar Sweep',
  component: DotmTriangle14,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle14>

export const Default: Story = {}
