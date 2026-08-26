/**
 * 16 variants — static tables in several densities and border styles.
 *
 * **Registry:** Watermelon UI — `@watermelon/table` ([docs](https://ui.watermelon.sh/components/table))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@/registries/watermelon/components/ui/table'

const meta: Meta<typeof Table> = {
  title: 'Watermelon UI/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {}
