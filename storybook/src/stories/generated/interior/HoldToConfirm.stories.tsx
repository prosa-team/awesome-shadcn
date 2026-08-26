/**
 * You need a hold gesture that guards a destructive action from accidental clicks.
 *
 * **Registry:** interior.dev — `@interior/hold-to-confirm` ([docs](https://interior.dev/docs/hold-to-confirm))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HoldToConfirm } from '@/registries/interior/components/interior/hold-to-confirm'

const meta: Meta<typeof HoldToConfirm> = {
  title: 'interior.dev/Hold to Confirm',
  component: HoldToConfirm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HoldToConfirm>

export const Default: Story = {}
