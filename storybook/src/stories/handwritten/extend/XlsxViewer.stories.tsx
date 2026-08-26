import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { XlsxViewerPreview } from '@/registries/extend/extend/xlsx-viewer'

/**
 * A spreadsheet viewer with the toolbar, sheet tabs, and upload the product uses.
 *
 * **Registry:** Extend UI — `@extend/xlsx-viewer`
 * ([docs](https://ui.extend.ai/ui/docs/components/xlsx-viewer))
 *
 * `XlsxViewerPreview` is the shell the registry publishes for exactly this: it
 * wires the viewer to a controlled dark-mode pair and an optional `src`. With
 * no `src` it shows its own upload state, which is what a reader without a
 * spreadsheet to hand should see.
 */
const Viewer = (props: { showToolbar?: boolean; showUpload?: boolean; src?: string }) => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="h-[30rem] w-[52rem] max-w-full">
      <XlsxViewerPreview {...props} isDark={isDark} onIsDarkChange={setIsDark} />
    </div>
  )
}

const meta: Meta<typeof XlsxViewerPreview> = {
  title: 'Extend UI/XLSX Viewer',
  component: XlsxViewerPreview,
  tags: ['autodocs'],
  render: () => <Viewer />,
}

export default meta
type Story = StoryObj<typeof XlsxViewerPreview>

/** No file yet: the drop target that starts the flow. */
export const Default: Story = {}

/** Without the toolbar, for an embed where the host app owns the controls. */
export const NoToolbar: Story = { render: () => <Viewer showToolbar={false} /> }

/** Upload disabled, for a viewer bound to one document. */
export const NoUpload: Story = { render: () => <Viewer showUpload={false} /> }
