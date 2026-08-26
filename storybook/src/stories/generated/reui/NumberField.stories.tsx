/**
 * Quantities are nudged rather than typed, and min/max/step must be enforced in the control.
 *
 * **Registry:** ReUI — `@reui/number-field` ([docs](https://reui.io/components/number-field))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { NumberField } from '@/registries/reui/components/reui/number-field'

const meta: Meta<typeof NumberField> = {
  title: 'ReUI/Number Field',
  component: NumberField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NumberField>

export const Default: Story = {}
