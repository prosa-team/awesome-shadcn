/**
 * A dark hero needs volumetric WebGL light — check the frame cost before shipping to mobile.
 *
 * **Registry:** Spell UI — `@spell/light-rays` ([docs](https://spell.sh/docs/light-rays))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Rays from '@/registries/spell/light-rays'

const meta: Meta<typeof Rays> = {
  title: 'Spell UI/Light Rays',
  component: Rays,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Rays>

export const Default: Story = {}
