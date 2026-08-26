/**
 * You need a popover that knows its trigger origin and flips on collision.
 *
 * **Registry:** interior.dev — `@interior/popover` ([docs](https://interior.dev/docs/popover))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Popover } from '@/registries/interior/components/interior/popover'

const meta: Meta<typeof Popover> = {
  title: 'interior.dev/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    trigger: "Sample",
    children: "The quick brown fox jumps over the lazy dog.",
    label: "Registry component",
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {}
