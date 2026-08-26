/**
 * Logos or cards outnumber the row and continuous scroll beats a cramped static grid.
 *
 * **Registry:** Spell UI — `@spell/marquee` ([docs](https://spell.sh/docs/marquee))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Marquee } from '@/registries/spell/marquee'

const meta: Meta<typeof Marquee> = {
  title: 'Spell UI/Marquee',
  component: Marquee,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Marquee>

export const Default: Story = {}
