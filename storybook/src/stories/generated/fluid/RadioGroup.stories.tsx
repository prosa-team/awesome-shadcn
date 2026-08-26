/**
 * An exclusive choice where the selection should visibly move between options, making the swap legible.
 *
 * **Registry:** Fluid Functionalism — `@fluid/radio-group` ([docs](https://www.fluidfunctionalism.com/docs/radio-group))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from '@/registries/fluid/components/ui/radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'Fluid Functionalism/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {}
