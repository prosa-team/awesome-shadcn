/**
 * Widgets | A sliding scale for precise input, where dragging beats typing on touch.
 *
 * **Registry:** Watermelon UI — `@watermelon/weight-widget` ([docs](https://ui.watermelon.sh/animated-components/weight-widget))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WeightWidget } from '@/registries/watermelon/components/ui/weight-widget'

const meta: Meta<typeof WeightWidget> = {
  title: 'Watermelon UI/Weight Widget',
  component: WeightWidget,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WeightWidget>

export const Default: Story = {}
