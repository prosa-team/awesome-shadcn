/**
 * You need a side panel that keeps its scroll position and state.
 *
 * **Registry:** interior.dev — `@interior/drawer` ([docs](https://interior.dev/docs/drawer))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Drawer } from '@/registries/interior/components/interior/drawer'

const meta: Meta<typeof Drawer> = {
  title: 'interior.dev/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    open: true,
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {}
