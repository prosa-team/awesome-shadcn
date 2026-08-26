/**
 * Data is hierarchical and depth matters — files, org charts, categories — with keyboard traversal.
 *
 * **Registry:** ReUI — `@reui/tree` ([docs](https://reui.io/components/tree))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tree } from '@/registries/reui/components/reui/tree'

const meta: Meta<typeof Tree> = {
  title: 'ReUI/Tree',
  component: Tree,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tree>

export const Default: Story = {}
