/**
 * A delimited file needs previewing as a table before import, so bad delimiters and headers surface early.
 *
 * **Registry:** Extend UI — `@extend/csv-viewer` ([docs](https://ui.extend.ai/ui/docs/components/csv-tsv-viewer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CsvViewer } from '@/registries/extend/extend/csv-viewer'

const meta: Meta<typeof CsvViewer> = {
  title: 'Extend UI/CSV/TSV Viewer',
  component: CsvViewer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CsvViewer>

export const Default: Story = {}
