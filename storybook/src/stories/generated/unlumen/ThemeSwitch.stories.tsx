/**
 * Theme switching is a visible moment rather than a setting buried in a menu.
 *
 * **Registry:** Unlumen UI — `@unlumen/theme-switch` ([docs](https://ui.unlumen.com/docs/ui/unlumen/theme-switch))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThemeSwitch } from '@/registries/unlumen/components/unlumen-ui/theme-switch'

const meta: Meta<typeof ThemeSwitch> = {
  title: 'Unlumen UI/Theme Switch',
  component: ThemeSwitch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ThemeSwitch>

export const Default: Story = {}
