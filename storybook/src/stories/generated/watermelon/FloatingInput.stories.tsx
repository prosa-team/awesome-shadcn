/**
 * Inputs | The label must survive focus, so the field's purpose stays visible while typing.
 *
 * **Registry:** Watermelon UI — `@watermelon/floating-input` ([docs](https://ui.watermelon.sh/animated-components/floating-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FloatingInput } from '@/registries/watermelon/components/ui/floating-input'

const meta: Meta<typeof FloatingInput> = {
  title: 'Watermelon UI/Floating Input',
  component: FloatingInput,
  tags: ['autodocs'],
  args: {
    label: "Registry component",
  },
}

export default meta
type Story = StoryObj<typeof FloatingInput>

export const Default: Story = {}
