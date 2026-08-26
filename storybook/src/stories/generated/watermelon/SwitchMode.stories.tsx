/**
 * Toggle | A theme toggle with sliding icon states, when the switch should be part of the personality.
 *
 * **Registry:** Watermelon UI — `@watermelon/switch-mode` ([docs](https://ui.watermelon.sh/animated-components/switch-mode))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SwitchMode } from '@/registries/watermelon/components/ui/switch-mode'

const meta: Meta<typeof SwitchMode> = {
  title: 'Watermelon UI/Switch Mode',
  component: SwitchMode,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SwitchMode>

export const Default: Story = {}
