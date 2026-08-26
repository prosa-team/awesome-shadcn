/**
 * A row or card carries a state (`active`, `failed`, `3`) that must be scannable in a column of many.
 *
 * **Registry:** ReUI — `@reui/badge` ([docs](https://reui.io/components/badge))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registries/reui/components/reui/badge'

const meta: Meta<typeof Badge> = {
  title: 'ReUI/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
