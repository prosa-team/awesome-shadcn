/**
 * Structured tool output belongs in rows and columns; a markdown table would lose alignment and overflow on mobile.
 *
 * **Registry:** AICSS — `@aicss/data-table` ([docs](https://www.aicss.dev/components/data-table))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DataTable } from '@/registries/aicss/DataTable'

const meta: Meta<typeof DataTable> = {
  title: 'AICSS/Data Table',
  component: DataTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {}
