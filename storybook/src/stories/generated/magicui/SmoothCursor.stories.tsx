/**
 * A portfolio or agency site replaces the system cursor with a lagging, springy one.
 *
 * **Registry:** Magic UI — `@magicui/smooth-cursor` ([docs](https://magicui.design/docs/components/smooth-cursor))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SmoothCursor } from '@/registries/magicui/ui/smooth-cursor'

const meta: Meta<typeof SmoothCursor> = {
  title: 'Magic UI/Smooth Cursor',
  component: SmoothCursor,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SmoothCursor>

export const Default: Story = {}
