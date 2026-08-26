/**
 * You need a dropdown menu whose active highlight travels between items.
 *
 * **Registry:** interior.dev — `@interior/dropdown` ([docs](https://interior.dev/docs/dropdown))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dropdown } from '@/registries/interior/components/interior/dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'interior.dev/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {}
