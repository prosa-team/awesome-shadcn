/**
 * Widgets | A fitness or activity metric where the number transitions as it updates.
 *
 * **Registry:** Watermelon UI — `@watermelon/run-widget` ([docs](https://ui.watermelon.sh/animated-components/run-widget))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RunWidget } from '@/registries/watermelon/components/ui/run-widget'

const meta: Meta<typeof RunWidget> = {
  title: 'Watermelon UI/Run Widget',
  component: RunWidget,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RunWidget>

export const Default: Story = {}
