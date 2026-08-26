/**
 * You need a modal with backdrop, scroll lock, and focus trap handled correctly.
 *
 * **Registry:** interior.dev — `@interior/modal` ([docs](https://interior.dev/docs/modal))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal } from '@/registries/interior/components/interior/modal'

const meta: Meta<typeof Modal> = {
  title: 'interior.dev/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    open: true,
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {}
