/**
 * The agent's answer is a recommendation between options and the user should be able to check the criteria side by side.
 *
 * **Registry:** AICSS — `@aicss/comparison-table` ([docs](https://www.aicss.dev/components/comparison-table))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ComparisonTable } from '@/registries/aicss/ComparisonTable'

const meta: Meta<typeof ComparisonTable> = {
  title: 'AICSS/Comparison Table',
  component: ComparisonTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ComparisonTable>

export const Default: Story = {}
