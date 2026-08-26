/**
 * A checklist or terms box where checking should feel satisfying — spring plus strike-through.
 *
 * **Registry:** Spell UI — `@spell/animated-checkbox` ([docs](https://spell.sh/docs/animated-checkbox))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedCheckbox } from '@/registries/spell/animated-checkbox'

const meta: Meta<typeof AnimatedCheckbox> = {
  title: 'Spell UI/Animated Checkbox',
  component: AnimatedCheckbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedCheckbox>

export const Default: Story = {}
