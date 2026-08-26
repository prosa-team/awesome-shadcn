/**
 * A dark section needs slow diagonal motion in the background — space-themed, cheap to run.
 *
 * **Registry:** Magic UI — `@magicui/meteors` ([docs](https://magicui.design/docs/components/meteors))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Meteors } from '@/registries/magicui/ui/meteors'

const meta: Meta<typeof Meteors> = {
  title: 'Magic UI/Meteors',
  component: Meteors,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Meteors>

export const Default: Story = {}
