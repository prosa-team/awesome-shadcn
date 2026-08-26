/**
 * Word files arrive from clients and must be readable in-app without a Microsoft round trip.
 *
 * **Registry:** Extend UI — `@extend/docx-viewer` ([docs](https://ui.extend.ai/ui/docs/components/docx-viewer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocxViewerPreview } from '@/registries/extend/extend/docx-viewer'

const meta: Meta<typeof DocxViewerPreview> = {
  title: 'Extend UI/DOCX Viewer',
  component: DocxViewerPreview,
  tags: ['autodocs'],
  args: {
    isDark: true,
  },
}

export default meta
type Story = StoryObj<typeof DocxViewerPreview>

export const Default: Story = {}
