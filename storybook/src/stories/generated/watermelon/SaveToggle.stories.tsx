/**
 * Buttons | Save state cycles through idle, saving, and saved, and all three must live in one control.
 *
 * **Registry:** Watermelon UI — `@watermelon/save-toggle` ([docs](https://ui.watermelon.sh/animated-components/save-toggle))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SaveToggle } from '@/registries/watermelon/components/ui/save-toggle'

const meta: Meta<typeof SaveToggle> = {
  title: 'Watermelon UI/Save Toggle',
  component: SaveToggle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SaveToggle>

export const Default: Story = {}
