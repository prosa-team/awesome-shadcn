/**
 * 16 variants — including the animated and card-style selections.
 *
 * **Registry:** Watermelon UI — `@watermelon/checkbox` ([docs](https://ui.watermelon.sh/components/checkbox))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '@/registries/watermelon/components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Watermelon UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}
