/**
 * A single choice from a longer list — roles, modes, environments — inside a settings surface.
 *
 * **Registry:** Fluid Functionalism — `@fluid/select` ([docs](https://www.fluidfunctionalism.com/docs/select))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@/registries/fluid/components/ui/select'

const meta: Meta<typeof Select> = {
  title: 'Fluid Functionalism/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}
