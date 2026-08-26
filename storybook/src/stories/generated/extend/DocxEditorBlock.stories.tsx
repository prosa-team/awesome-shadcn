/**
 * The editing screen around the DOCX editor, including file state and save actions.
 *
 * **Registry:** Extend UI — `@extend/docx-editor-block` ([docs](https://ui.extend.ai/ui/blocks#docx-editor-block))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocxEditorBlock } from '@/registries/extend/blocks/docx-editor'

const meta: Meta<typeof DocxEditorBlock> = {
  title: 'Extend UI/DOCX Editor Block',
  component: DocxEditorBlock,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocxEditorBlock>

export const Default: Story = {}
