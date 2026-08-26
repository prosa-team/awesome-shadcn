/**
 * Grouped actions behind one trigger, with a highlight that travels between items rather than blinking.
 *
 * **Registry:** Fluid Functionalism — `@fluid/dropdown` ([docs](https://www.fluidfunctionalism.com/docs/dropdown))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dropdown } from '@/registries/fluid/components/ui/dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Fluid Functionalism/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {}
