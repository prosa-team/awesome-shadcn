/**
 * You need a grid that rearranges on filter instead of blinking.
 *
 * **Registry:** interior.dev — `@interior/filter-grid` ([docs](https://interior.dev/docs/filter-grid))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FilterGrid } from '@/registries/interior/components/interior/filter-grid'

const meta: Meta<typeof FilterGrid> = {
  title: 'interior.dev/Filter Grid',
  component: FilterGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterGrid>

export const Default: Story = {}
