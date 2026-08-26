/**
 * A heading should scramble into place on hover or on view, for a technical brand.
 *
 * **Registry:** Magic UI — `@magicui/hyper-text` ([docs](https://magicui.design/docs/components/hyper-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HyperText } from '@/registries/magicui/ui/hyper-text'

const meta: Meta<typeof HyperText> = {
  title: 'Magic UI/Hyper Text',
  component: HyperText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HyperText>

export const Default: Story = {}
