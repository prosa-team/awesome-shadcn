/**
 * 9 variants — including auto-growing and character-counted versions.
 *
 * **Registry:** Watermelon UI — `@watermelon/textarea` ([docs](https://ui.watermelon.sh/components/textarea))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Textarea } from '@/registries/watermelon/components/ui/textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Watermelon UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}
