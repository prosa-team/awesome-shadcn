/**
 * You need a circular loader with a braille-cell orbit.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-19` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-19.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular19 } from '@/registries/dotmatrix/ui/dotm-circular-19'

const meta: Meta<typeof DotmCircular19> = {
  title: 'Dot Matrix/Orbit Cell',
  component: DotmCircular19,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular19>

export const Default: Story = {}
