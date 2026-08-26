/**
 * 13 variants — styled tables; for heavy behaviour use [ReUI Data Grid](https://reui.io/components/data-grid) instead.
 *
 * **Registry:** Watermelon UI — `@watermelon/data-table` ([docs](https://ui.watermelon.sh/components/data-table))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DataTable } from '@/registries/watermelon/components/ui/data-table'

const meta: Meta<typeof DataTable> = {
  title: 'Watermelon UI/Data Table',
  component: DataTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {}
