/**
 * 36 variants — the second-largest set, covering most select styling needs.
 *
 * **Registry:** Watermelon UI — `@watermelon/select` ([docs](https://ui.watermelon.sh/components/select))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select } from '@/registries/watermelon/components/ui/select'

const meta: Meta<typeof Select> = {
  title: 'Watermelon UI/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}
