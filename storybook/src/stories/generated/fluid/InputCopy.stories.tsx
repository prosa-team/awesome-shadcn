/**
 * An API key, install command, or invite URL is shown to be copied, so the field and the copy action belong together.
 *
 * **Registry:** Fluid Functionalism — `@fluid/input-copy` ([docs](https://www.fluidfunctionalism.com/docs/input-copy))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputCopy } from '@/registries/fluid/ui/input-copy'

const meta: Meta<typeof InputCopy> = {
  title: 'Fluid Functionalism/InputCopy',
  component: InputCopy,
  tags: ['autodocs'],
  args: {
    value: "item-1",
  },
}

export default meta
type Story = StoryObj<typeof InputCopy>

export const Default: Story = {}
