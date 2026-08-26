/**
 * You need a "new content" pill that appears without stealing the user's scroll position.
 *
 * **Registry:** interior.dev — `@interior/new-items-pill` ([docs](https://interior.dev/docs/new-items-pill))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { NewItemsPill } from '@/registries/interior/components/interior/new-items-pill'

const meta: Meta<typeof NewItemsPill> = {
  title: 'interior.dev/New Items Pill',
  component: NewItemsPill,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NewItemsPill>

export const Default: Story = {}
