/**
 * A variable font is loaded and hovering the headline should shift character weight — typography as the interaction.
 *
 * **Registry:** Magic UI — `@magicui/kinetic-text` ([docs](https://magicui.design/docs/components/kinetic-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { KineticText } from '@/registries/magicui/ui/kinetic-text'

const meta: Meta<typeof KineticText> = {
  title: 'Magic UI/Kinetic Text',
  component: KineticText,
  tags: ['autodocs'],
  args: {
    text: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof KineticText>

export const Default: Story = {}
