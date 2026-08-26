/**
 * 13 variants — including card-style choices for plan pickers.
 *
 * **Registry:** Watermelon UI — `@watermelon/radio-group` ([docs](https://ui.watermelon.sh/components/radio-group))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from '@/registries/watermelon/components/ui/radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'Watermelon UI/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {}
