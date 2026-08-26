/**
 * A headline where the gradient follows the cursor across the words — interactive emphasis instead of a static gradient fill.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/fluid-gradient-text` ([docs](https://chanhdai.com/components/fluid-gradient-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FluidGradientText } from '@/registries/ncdai/fluid-gradient-text'

const meta: Meta<typeof FluidGradientText> = {
  title: 'Chánh Đại Components/Fluid Gradient Text',
  component: FluidGradientText,
  tags: ['autodocs'],
  args: {
    text: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof FluidGradientText>

export const Default: Story = {}
