/**
 * You need a header that condenses as the user scrolls down.
 *
 * **Registry:** interior.dev — `@interior/sticky-header` ([docs](https://interior.dev/docs/sticky-header))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StickyHeader } from '@/registries/interior/components/interior/sticky-header'

const meta: Meta<typeof StickyHeader> = {
  title: 'interior.dev/Sticky Header',
  component: StickyHeader,
  tags: ['autodocs'],
  args: {
    title: "Registry component",
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof StickyHeader>

export const Default: Story = {}
