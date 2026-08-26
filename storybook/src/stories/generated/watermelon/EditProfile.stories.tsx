/**
 * Dialog | Profile editing with validation and save actions, without leaving the current page.
 *
 * **Registry:** Watermelon UI — `@watermelon/edit-profile` ([docs](https://ui.watermelon.sh/animated-components/edit-profile))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { EditProfile } from '@/registries/watermelon/components/ui/edit-profile'

const meta: Meta<typeof EditProfile> = {
  title: 'Watermelon UI/Edit Profile',
  component: EditProfile,
  tags: ['autodocs'],
  args: {
    isOpen: true,
  },
}

export default meta
type Story = StoryObj<typeof EditProfile>

export const Default: Story = {}
