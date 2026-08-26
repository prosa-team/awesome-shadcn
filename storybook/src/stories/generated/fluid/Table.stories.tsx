/**
 * A small table inside a settings or detail panel, where a full data grid would be overkill.
 *
 * **Registry:** Fluid Functionalism — `@fluid/table` ([docs](https://www.fluidfunctionalism.com/docs/table))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@/registries/fluid/ui/table'

const meta: Meta<typeof Table> = {
  title: 'Fluid Functionalism/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {}
