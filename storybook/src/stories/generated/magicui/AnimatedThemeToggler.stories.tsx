/**
 * Theme switching should be a moment, using View Transitions to wipe the new theme in from the button.
 *
 * **Registry:** Magic UI — `@magicui/animated-theme-toggler` ([docs](https://magicui.design/docs/components/animated-theme-toggler))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedThemeToggler } from '@/registries/magicui/ui/animated-theme-toggler'

const meta: Meta<typeof AnimatedThemeToggler> = {
  title: 'Magic UI/Animated Theme Toggler',
  component: AnimatedThemeToggler,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedThemeToggler>

export const Default: Story = {}
