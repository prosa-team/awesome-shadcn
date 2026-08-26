/**
 * You need a compact, persistent indicator for ongoing system work.
 *
 * **Registry:** interior.dev — `@interior/live-activity` ([docs](https://interior.dev/docs/live-activity))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LiveActivity } from '@/registries/interior/components/interior/live-activity'

const meta: Meta<typeof LiveActivity> = {
  title: 'interior.dev/Live Activity',
  component: LiveActivity,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LiveActivity>

export const Default: Story = {}
