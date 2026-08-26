/**
 * Several related settings are toggled in one sitting and each change must register instantly.
 *
 * **Registry:** Fluid Functionalism — `@fluid/checkbox-group` ([docs](https://www.fluidfunctionalism.com/docs/checkbox-group))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxGroup } from '@/registries/fluid/components/ui/checkbox-group'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Fluid Functionalism/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    checkedIndices: new Set([1]),
  },
}

export default meta
type Story = StoryObj<typeof CheckboxGroup>

export const Default: Story = {}
