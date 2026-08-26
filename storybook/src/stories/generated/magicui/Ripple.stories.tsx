/**
 * Concentric rings behind a centred hero element, suggesting broadcast or reach.
 *
 * **Registry:** Magic UI — `@magicui/ripple` ([docs](https://magicui.design/docs/components/ripple))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Ripple } from '@/registries/magicui/ui/ripple'

const meta: Meta<typeof Ripple> = {
  title: 'Magic UI/Ripple',
  component: Ripple,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Ripple>

export const Default: Story = {}
