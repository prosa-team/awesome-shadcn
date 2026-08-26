/**
 * A web app screenshot needs a browser chrome frame so it reads as a real product, with your URL in the bar.
 *
 * **Registry:** Magic UI — `@magicui/safari` ([docs](https://magicui.design/docs/components/safari))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Safari } from '@/registries/magicui/ui/safari'

const meta: Meta<typeof Safari> = {
  title: 'Magic UI/Safari',
  component: Safari,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Safari>

export const Default: Story = {}
