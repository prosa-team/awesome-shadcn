/**
 * Three-way light/dark/system choice that must be explicit, because a two-state toggle cannot express "system".
 *
 * **Registry:** Chánh Đại Components — `@ncdai/theme-switcher` ([docs](https://chanhdai.com/components/theme-switcher))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThemeSwitcher } from '@/registries/ncdai/theme-switcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Chánh Đại Components/Theme Switcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {}
