/**
 * A range control in an animated context, where the stock shadcn slider would feel inert.
 *
 * **Registry:** Unlumen UI — `@unlumen/slider` ([docs](https://ui.unlumen.com/docs/ui/unlumen/slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Slider } from '@/registries/unlumen/components/unlumen-ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'Unlumen UI/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {}
