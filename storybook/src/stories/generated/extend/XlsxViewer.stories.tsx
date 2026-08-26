/**
 * A spreadsheet needs inspecting with its sheets and formatting intact, before anything is imported.
 *
 * **Registry:** Extend UI — `@extend/xlsx-viewer` ([docs](https://ui.extend.ai/ui/docs/components/xlsx-viewer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WorkbookTableHeaderMenu } from '@/registries/extend/extend/xlsx-viewer'

const meta: Meta<typeof WorkbookTableHeaderMenu> = {
  title: 'Extend UI/XLSX Viewer',
  component: WorkbookTableHeaderMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WorkbookTableHeaderMenu>

export const Default: Story = {}
