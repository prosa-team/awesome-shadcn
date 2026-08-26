/**
 * A long document needs page thumbnails and jump targets, because scrolling 200 pages is not navigation.
 *
 * **Registry:** Extend UI — `@extend/document-viewer-sidebar` ([docs](https://ui.extend.ai/ui/docs/components/document-viewer-sidebar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocumentViewerThumbnailSidebar } from '@/registries/extend/extend/document-viewer-sidebar'

const meta: Meta<typeof DocumentViewerThumbnailSidebar> = {
  title: 'Extend UI/Document Viewer Sidebar',
  component: DocumentViewerThumbnailSidebar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocumentViewerThumbnailSidebar>

export const Default: Story = {}
