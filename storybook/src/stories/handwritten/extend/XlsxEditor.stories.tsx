import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { XlsxEditorPreview } from '@/registries/extend/extend/xlsx-editor'

/**
 * The spreadsheet editor: cell values corrected in place, usually after extraction.
 *
 * **Registry:** Extend UI — `@extend/xlsx-editor`
 * ([docs](https://ui.extend.ai/ui/docs/components/xlsx-editor))
 *
 * The editor surface reads from its own viewer context and throws outside it
 * (`useXlsxViewer must be used inside XlsxViewer or XlsxViewerProvider`).
 * `XlsxEditorPreview` is the published shell that sets that context up, so it
 * is the component a story can actually mount.
 */
const Editor = ({ fileName }: { fileName?: string }) => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="h-[30rem] w-[52rem] max-w-full">
      <XlsxEditorPreview fileName={fileName} isDark={isDark} onIsDarkChange={setIsDark} />
    </div>
  )
}

const meta: Meta<typeof XlsxEditorPreview> = {
  title: 'Extend UI/XLSX Editor',
  component: XlsxEditorPreview,
  tags: ['autodocs'],
  render: () => <Editor />,
}

export default meta
type Story = StoryObj<typeof XlsxEditorPreview>

/** The editor with no workbook loaded. */
export const Default: Story = {}

/** A named file, as it appears once one is opened. */
export const NamedFile: Story = { render: () => <Editor fileName="q4-figures.xlsx" /> }
