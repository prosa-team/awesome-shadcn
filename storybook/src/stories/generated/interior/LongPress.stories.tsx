/**
 * You need a long-press gesture confirmed by hold time and cancelled by any interruption.
 *
 * **Registry:** interior.dev — `@interior/long-press` ([docs](https://interior.dev/docs/long-press))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LongPressButton } from '@/registries/interior/components/interior/long-press'

const meta: Meta<typeof LongPressButton> = {
  title: 'interior.dev/Long Press',
  component: LongPressButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LongPressButton>

export const Default: Story = {}
