/**
 * Cell values must be corrected in place — typically fixing what an extraction model got wrong.
 *
 * **Registry:** Extend UI — `@extend/xlsx-editor` ([docs](https://ui.extend.ai/ui/docs/components/xlsx-editor))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { XlsxEditorSurface } from '@/registries/extend/extend/xlsx-editor'

const meta: Meta<typeof XlsxEditorSurface> = {
  title: 'Extend UI/XLSX Editor',
  component: XlsxEditorSurface,
  tags: ['autodocs'],
  args: {
    isDark: true,
  },
}

export default meta
type Story = StoryObj<typeof XlsxEditorSurface>

export const Default: Story = {}
