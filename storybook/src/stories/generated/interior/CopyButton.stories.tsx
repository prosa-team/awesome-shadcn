/**
 * You need a copy interaction that locks its width and reverts after a timeout.
 *
 * **Registry:** interior.dev — `@interior/copy-button` ([docs](https://interior.dev/docs/copy-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CopyButton } from '@/registries/interior/components/interior/copy-button'

const meta: Meta<typeof CopyButton> = {
  title: 'interior.dev/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    value: "item-1",
  },
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {}
