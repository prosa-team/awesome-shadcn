/**
 * Buttons | A destructive action is reversible for a few seconds and the countdown must be visible, not implied.
 *
 * **Registry:** Watermelon UI — `@watermelon/timed-undo-action` ([docs](https://ui.watermelon.sh/animated-components/time-undo-action))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TimedUndoAction } from '@/registries/watermelon/components/ui/timed-undo-action'

const meta: Meta<typeof TimedUndoAction> = {
  title: 'Watermelon UI/Timed Undo Action',
  component: TimedUndoAction,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TimedUndoAction>

export const Default: Story = {}
