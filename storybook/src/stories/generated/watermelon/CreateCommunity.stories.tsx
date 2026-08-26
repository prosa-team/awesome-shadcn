/**
 * Dialog | Creating an entity needs name, description, and settings in one dialog rather than a wizard.
 *
 * **Registry:** Watermelon UI — `@watermelon/create-community` ([docs](https://ui.watermelon.sh/animated-components/create-community))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CreateCommunity } from '@/registries/watermelon/components/ui/create-community'

const meta: Meta<typeof CreateCommunity> = {
  title: 'Watermelon UI/Create Community',
  component: CreateCommunity,
  tags: ['autodocs'],
  args: {
    isOpen: true,
  },
}

export default meta
type Story = StoryObj<typeof CreateCommunity>

export const Default: Story = {}
