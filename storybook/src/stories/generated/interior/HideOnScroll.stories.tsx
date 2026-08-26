/**
 * You need a toolbar that hides on scroll down and yields to content.
 *
 * **Registry:** interior.dev — `@interior/hide-on-scroll` ([docs](https://interior.dev/docs/hide-on-scroll))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HideOnScroll } from '@/registries/interior/components/interior/hide-on-scroll'

const meta: Meta<typeof HideOnScroll> = {
  title: 'interior.dev/Hide on Scroll',
  component: HideOnScroll,
  tags: ['autodocs'],
  args: {
    bar: "Sample",
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof HideOnScroll>

export const Default: Story = {}
