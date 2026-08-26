/**
 * You need navigation that highlights the section actually in view.
 *
 * **Registry:** interior.dev — `@interior/scroll-spy` ([docs](https://interior.dev/docs/scroll-spy))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollSpy } from '@/registries/interior/components/interior/scroll-spy'

const meta: Meta<typeof ScrollSpy> = {
  title: 'interior.dev/Scroll Spy',
  component: ScrollSpy,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollSpy>

export const Default: Story = {}
