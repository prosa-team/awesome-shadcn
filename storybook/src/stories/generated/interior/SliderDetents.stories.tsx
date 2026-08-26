/**
 * You need a slider with snap points the user can feel.
 *
 * **Registry:** interior.dev — `@interior/slider-detents` ([docs](https://interior.dev/docs/slider-detents))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SliderDetents } from '@/registries/interior/components/interior/slider-detents'

const meta: Meta<typeof SliderDetents> = {
  title: 'interior.dev/Slider Detents',
  component: SliderDetents,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SliderDetents>

export const Default: Story = {}
