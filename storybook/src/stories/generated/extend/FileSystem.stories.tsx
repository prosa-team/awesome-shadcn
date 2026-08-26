/**
 * Documents live in folders users browse, move, and organise, rather than a flat list.
 *
 * **Registry:** Extend UI — `@extend/file-system` ([docs](https://ui.extend.ai/ui/docs/components/file-system))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileSystem } from '@/registries/extend/extend/file-system'

const meta: Meta<typeof FileSystem> = {
  title: 'Extend UI/File System',
  component: FileSystem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileSystem>

export const Default: Story = {}
