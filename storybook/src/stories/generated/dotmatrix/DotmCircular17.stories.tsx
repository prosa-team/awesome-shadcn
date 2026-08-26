/**
 * You need a circular loader with checker phase changes.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-17` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-17.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular17 } from '@/registries/dotmatrix/ui/dotm-circular-17'

const meta: Meta<typeof DotmCircular17> = {
  title: 'Dot Matrix/Checker Shift',
  component: DotmCircular17,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular17>

export const Default: Story = {}
