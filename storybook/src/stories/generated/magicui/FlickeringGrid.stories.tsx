/**
 * A technical or infrastructure product needs a background that suggests activity and machines.
 *
 * **Registry:** Magic UI — `@magicui/flickering-grid` ([docs](https://magicui.design/docs/components/flickering-grid))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FlickeringGrid } from '@/registries/magicui/ui/flickering-grid'

const meta: Meta<typeof FlickeringGrid> = {
  title: 'Magic UI/Flickering Grid',
  component: FlickeringGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FlickeringGrid>

export const Default: Story = {}
