/**
 * A diagonal striped background for a section that needs separation without a hard divider.
 *
 * **Registry:** Magic UI — `@magicui/striped-pattern` ([docs](https://magicui.design/docs/components/striped-pattern))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StripedPattern } from '@/registries/magicui/components/magicui/striped-pattern'

const meta: Meta<typeof StripedPattern> = {
  title: 'Magic UI/Striped Pattern',
  component: StripedPattern,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StripedPattern>

export const Default: Story = {}
