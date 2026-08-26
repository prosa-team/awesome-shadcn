/**
 * A genuine milestone lands — signup complete, first deploy — and the moment should be celebrated once, not on every click.
 *
 * **Registry:** Magic UI — `@magicui/confetti` ([docs](https://magicui.design/docs/components/confetti))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Confetti } from '@/registries/magicui/ui/confetti'

const meta: Meta<typeof Confetti> = {
  title: 'Magic UI/Confetti',
  component: Confetti,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Confetti>

export const Default: Story = {}
