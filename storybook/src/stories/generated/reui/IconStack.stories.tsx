/**
 * A row must show a tech or integration set compactly, overlapping instead of wrapping.
 *
 * **Registry:** ReUI — `@reui/icon-stack` ([docs](https://reui.io/components/icon-stack))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconStack } from '@/registries/reui/components/reui/icon-stack'

const meta: Meta<typeof IconStack> = {
  title: 'ReUI/Icon Stack',
  component: IconStack,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconStack>

export const Default: Story = {}
