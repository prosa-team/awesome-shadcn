/**
 * Disclosure | A setting has sub-options that only matter when it is on, so they should appear with it.
 *
 * **Registry:** Watermelon UI — `@watermelon/switch-disclosure` ([docs](https://ui.watermelon.sh/animated-components/switch-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SwitchDisclosure } from '@/registries/watermelon/components/ui/switch-disclosure'

const meta: Meta<typeof SwitchDisclosure> = {
  title: 'Watermelon UI/Switch Disclosure',
  component: SwitchDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SwitchDisclosure>

export const Default: Story = {}
