/**
 * 8 variants — separators and truncation styles for deep hierarchies.
 *
 * **Registry:** Watermelon UI — `@watermelon/breadcrumb` ([docs](https://ui.watermelon.sh/components/breadcrumb))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb } from '@/registries/watermelon/components/ui/breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Watermelon UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}
