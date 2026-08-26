/**
 * Slide decks are part of the intake and users need to page through them without PowerPoint.
 *
 * **Registry:** Extend UI — `@extend/pptx-viewer` ([docs](https://ui.extend.ai/ui/docs/components/pptx-viewer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PptxViewerPreview } from '@/registries/extend/extend/pptx-viewer'

const meta: Meta<typeof PptxViewerPreview> = {
  title: 'Extend UI/PPTX Viewer',
  component: PptxViewerPreview,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PptxViewerPreview>

export const Default: Story = {}
