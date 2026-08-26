/**
 * Users must read the source PDF next to extracted data — sending them to a download breaks the review loop.
 *
 * **Registry:** Extend UI — `@extend/pdf-viewer` ([docs](https://ui.extend.ai/ui/docs/components/pdf-viewer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PDFViewer } from '@/registries/extend/extend/pdf-viewer'

const meta: Meta<typeof PDFViewer> = {
  title: 'Extend UI/PDF Viewer',
  component: PDFViewer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PDFViewer>

export const Default: Story = {}
