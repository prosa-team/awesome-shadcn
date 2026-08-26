/**
 * Docs or a landing page must show project structure, and an indented code block would be unreadable.
 *
 * **Registry:** Magic UI — `@magicui/file-tree` ([docs](https://magicui.design/docs/components/file-tree))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CollapseButton } from '@/registries/magicui/ui/file-tree'

const meta: Meta<typeof CollapseButton> = {
  title: 'Magic UI/File Tree',
  component: CollapseButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CollapseButton>

export const Default: Story = {}
