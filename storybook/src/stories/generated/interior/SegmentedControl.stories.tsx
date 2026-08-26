/**
 * You need a segmented control where the thumb slides and the label inverts through it.
 *
 * **Registry:** interior.dev — `@interior/segmented-control` ([docs](https://interior.dev/docs/segmented-control))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SegmentedControl } from '@/registries/interior/components/interior/segmented-control'

const meta: Meta<typeof SegmentedControl> = {
  title: 'interior.dev/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

export const Default: Story = {}
