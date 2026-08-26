/**
 * You need tooltips that delay once, then show instantly for the rest of the group.
 *
 * **Registry:** interior.dev — `@interior/tooltip-group` ([docs](https://interior.dev/docs/tooltip-group))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TooltipGroup } from '@/registries/interior/components/interior/tooltip-group'

const meta: Meta<typeof TooltipGroup> = {
  title: 'interior.dev/Tooltip Group',
  component: TooltipGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TooltipGroup>

export const Default: Story = {}
