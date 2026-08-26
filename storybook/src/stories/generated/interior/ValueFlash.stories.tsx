/**
 * You need numbers that flash or highlight when they change.
 *
 * **Registry:** interior.dev — `@interior/value-flash` ([docs](https://interior.dev/docs/value-flash))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ValueFlash } from '@/registries/interior/components/interior/value-flash'

const meta: Meta<typeof ValueFlash> = {
  title: 'interior.dev/Value Flash',
  component: ValueFlash,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ValueFlash>

export const Default: Story = {}
