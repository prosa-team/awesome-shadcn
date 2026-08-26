/**
 * An icon needs a consistent framed container across a settings list or feature grid.
 *
 * **Registry:** ReUI — `@reui/icon-tile` ([docs](https://reui.io/components/icon-tile))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconTile } from '@/registries/reui/components/reui/icon-tile'

const meta: Meta<typeof IconTile> = {
  title: 'ReUI/Icon Tile',
  component: IconTile,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconTile>

export const Default: Story = {}
