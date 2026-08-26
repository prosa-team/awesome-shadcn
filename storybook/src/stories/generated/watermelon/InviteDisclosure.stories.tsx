/**
 * Disclosure | Pending invitations need a badge count that expands into the actual list.
 *
 * **Registry:** Watermelon UI — `@watermelon/invite-disclosure` ([docs](https://ui.watermelon.sh/animated-components/invite-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InviteDisclosure } from '@/registries/watermelon/components/ui/invite-disclosure'

const meta: Meta<typeof InviteDisclosure> = {
  title: 'Watermelon UI/Invite Disclosure',
  component: InviteDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InviteDisclosure>

export const Default: Story = {}
