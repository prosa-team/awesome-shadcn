/**
 * 9 variants — single show/hide regions without accordion semantics.
 *
 * **Registry:** Watermelon UI — `@watermelon/collapsible` ([docs](https://ui.watermelon.sh/components/collapsible))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Collapsible } from '@/registries/watermelon/components/ui/collapsible'

const meta: Meta<typeof Collapsible> = {
  title: 'Watermelon UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {}
