/**
 * Interaction | Tags are added and removed constantly, and the row must reflow smoothly and auto-scroll.
 *
 * **Registry:** Watermelon UI — `@watermelon/tags` ([docs](https://ui.watermelon.sh/animated-components/tags))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tags } from '@/registries/watermelon/components/ui/tags'

const meta: Meta<typeof Tags> = {
  title: 'Watermelon UI/Tags',
  component: Tags,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {}
