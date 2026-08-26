/**
 * 12 variants — searchable selects in several shapes.
 *
 * **Registry:** Watermelon UI — `@watermelon/combobox-1` ([docs](https://ui.watermelon.sh/components/combobox))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Combobox1 from '@/registries/watermelon/components/ui/combobox-1'

const meta: Meta<typeof Combobox1> = {
  title: 'Watermelon UI/Combobox',
  component: Combobox1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Combobox1>

export const Default: Story = {}
