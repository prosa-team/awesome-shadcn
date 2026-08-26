/**
 * A synthwave horizon grid, for a brand that leans deliberately retro.
 *
 * **Registry:** Magic UI — `@magicui/retro-grid` ([docs](https://magicui.design/docs/components/retro-grid))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RetroGrid } from '@/registries/magicui/ui/retro-grid'

const meta: Meta<typeof RetroGrid> = {
  title: 'Magic UI/Retro Grid',
  component: RetroGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RetroGrid>

export const Default: Story = {}
