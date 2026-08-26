/**
 * A product video or screenshot should look lit from behind, lifting it off a dark section.
 *
 * **Registry:** Magic UI — `@magicui/backlight` ([docs](https://magicui.design/docs/components/backlight))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Backlight } from '@/registries/magicui/ui/backlight'

const meta: Meta<typeof Backlight> = {
  title: 'Magic UI/Backlight',
  component: Backlight,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Backlight>

export const Default: Story = {}
