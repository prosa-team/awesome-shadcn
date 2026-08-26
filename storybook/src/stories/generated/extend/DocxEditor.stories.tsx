/**
 * Users have to change the Word document itself and hand it back, not just comment on it.
 *
 * **Registry:** Extend UI — `@extend/docx-editor` ([docs](https://ui.extend.ai/ui/docs/components/docx-editor))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocxEditorPreview } from '@/registries/extend/extend/docx-editor'

const meta: Meta<typeof DocxEditorPreview> = {
  title: 'Extend UI/DOCX Editor',
  component: DocxEditorPreview,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocxEditorPreview>

export const Default: Story = {}
