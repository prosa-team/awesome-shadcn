/**
 * A date or range is one field among many in a form and a full calendar would dominate it.
 *
 * **Registry:** ReUI — `@reui/date-selector` ([docs](https://reui.io/components/date-selector))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DateSelector } from '@/registries/reui/components/reui/date-selector'

const meta: Meta<typeof DateSelector> = {
  title: 'ReUI/Date Selector',
  component: DateSelector,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DateSelector>

export const Default: Story = {}
