/**
 * Related fields (currency + amount, protocol + host) read as one control instead of three inputs in a row.
 *
 * **Registry:** Fluid Functionalism — `@fluid/input-group` ([docs](https://www.fluidfunctionalism.com/docs/input-group))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputGroup } from '@/registries/fluid/ui/input-group'

const meta: Meta<typeof InputGroup> = {
  title: 'Fluid Functionalism/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof InputGroup>

export const Default: Story = {}
