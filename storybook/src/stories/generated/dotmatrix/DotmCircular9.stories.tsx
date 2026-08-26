/**
 * You need a circular loader with directional beacon motion.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-circular-9` ([docs](https://dotmatrix.zzzzshawn.cloud/r/dotm-circular-9.json))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmCircular9 } from '@/registries/dotmatrix/ui/dotm-circular-9'

const meta: Meta<typeof DotmCircular9> = {
  title: 'Dot Matrix/Star Compass',
  component: DotmCircular9,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotmCircular9>

export const Default: Story = {}
