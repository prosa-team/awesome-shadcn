/**
 * 2 blocks — mixed-size feature grids where items differ in importance.
 *
 * **Registry:** Watermelon UI — `@watermelon/bento-1` ([docs](https://ui.watermelon.sh/blocks/Bento))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Bento1 from '@/registries/watermelon/components/ui/bento-1'

const meta: Meta<typeof Bento1> = {
  title: 'Watermelon UI/Bento',
  component: Bento1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Bento1>

export const Default: Story = {}
