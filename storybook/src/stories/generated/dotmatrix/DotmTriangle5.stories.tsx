/**
 * You need a triangle loader with reflected row scanning.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-triangle-5` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-triangle-5.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmTriangle5 } from '@/registries/dotmatrix/ui/dotm-triangle-5'

const meta: Meta<typeof DotmTriangle5> = {
  title: 'Dot Matrix/Row Sweep',
  component: DotmTriangle5,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmTriangle5>

export const Default: Story = {}
