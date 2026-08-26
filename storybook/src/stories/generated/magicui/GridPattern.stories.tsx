/**
 * A static blueprint-style grid behind a section — the calm baseline the animated variants build on.
 *
 * **Registry:** Magic UI — `@magicui/grid-pattern` ([docs](https://magicui.design/docs/components/grid-pattern))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GridPattern } from '@/registries/magicui/ui/grid-pattern'

const meta: Meta<typeof GridPattern> = {
  title: 'Magic UI/Grid Pattern',
  component: GridPattern,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GridPattern>

export const Default: Story = {}
