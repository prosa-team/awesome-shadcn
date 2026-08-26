/**
 * A list of uploads is unusable as filenames alone — users recognise documents by how they look.
 *
 * **Registry:** Extend UI — `@extend/file-thumbnail` ([docs](https://ui.extend.ai/ui/docs/components/file-thumbnail))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileThumbnail } from '@/registries/extend/extend/file-thumbnail'

const meta: Meta<typeof FileThumbnail> = {
  title: 'Extend UI/File Thumbnail',
  component: FileThumbnail,
  tags: ['autodocs'],
  args: {
    file: { name: "Registry component", type: "Sample" },
  },
}

export default meta
type Story = StoryObj<typeof FileThumbnail>

export const Default: Story = {}
