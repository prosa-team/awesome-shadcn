/**
 * A section needs texture rather than a flat colour, and dots read quieter than a grid.
 *
 * **Registry:** Magic UI — `@magicui/dot-pattern` ([docs](https://magicui.design/docs/components/dot-pattern))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotPattern } from '@/registries/magicui/ui/dot-pattern'

const meta: Meta<typeof DotPattern> = {
  title: 'Magic UI/Dot Pattern',
  component: DotPattern,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotPattern>

export const Default: Story = {}
