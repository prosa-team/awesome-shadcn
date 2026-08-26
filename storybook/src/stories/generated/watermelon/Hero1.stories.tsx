/**
 * 43 blocks — the widest set: pick a hero shape before designing one, since it decides the page's rhythm.
 *
 * **Registry:** Watermelon UI — `@watermelon/hero-1` ([docs](https://ui.watermelon.sh/blocks/hero))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Hero1 from '@/registries/watermelon/components/ui/hero-1'

const meta: Meta<typeof Hero1> = {
  title: 'Watermelon UI/Hero',
  component: Hero1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Hero1>

export const Default: Story = {}
