/**
 * You need buttons that visually confirm a press landed.
 *
 * **Registry:** interior.dev — `@interior/press-depth` ([docs](https://interior.dev/docs/press-depth))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PressDepth } from '@/registries/interior/components/interior/press-depth'

const meta: Meta<typeof PressDepth> = {
  title: 'interior.dev/Press Depth',
  component: PressDepth,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PressDepth>

export const Default: Story = {}
