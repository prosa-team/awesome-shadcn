/**
 * You need a circular loader with a braille rail scan.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-16` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-16.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular16 } from '@/registries/dotmatrix/ui/dotm-circular-16'

const meta: Meta<typeof DotmCircular16> = {
  title: 'Dot Matrix/Rail Scan',
  component: DotmCircular16,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular16>

export const Default: Story = {}
