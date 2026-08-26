/**
 * You need an avatar stack that animates as people join or leave.
 *
 * **Registry:** interior.dev — `@interior/presence-avatars` ([docs](https://interior.dev/docs/presence-avatars))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PresenceAvatars } from '@/registries/interior/components/interior/presence-avatars'

const meta: Meta<typeof PresenceAvatars> = {
  title: 'interior.dev/Presence Avatars',
  component: PresenceAvatars,
  tags: ['autodocs'],
  args: {
    people: [{ id: "item-1", name: "Registry component" }, { id: "item-1 2", name: "Registry component 2" }, { id: "item-1 3", name: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof PresenceAvatars>

export const Default: Story = {}
