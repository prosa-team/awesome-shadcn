/**
 * Buttons | One click starts a sequence of steps and the button itself reports progress through them.
 *
 * **Registry:** Watermelon UI — `@watermelon/run-action-button` ([docs](https://ui.watermelon.sh/animated-components/run-action-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RunActionButton } from '@/registries/watermelon/components/ui/run-action-button'

const meta: Meta<typeof RunActionButton> = {
  title: 'Watermelon UI/Run Action Button',
  component: RunActionButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RunActionButton>

export const Default: Story = {}
