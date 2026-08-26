/**
 * You need tabs sharing one animated indicator.
 *
 * **Registry:** interior.dev — `@interior/tabs` ([docs](https://interior.dev/docs/tabs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@/registries/interior/components/interior/tabs'

const meta: Meta<typeof Tabs> = {
  title: 'interior.dev/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {}
