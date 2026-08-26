/**
 * A thinking state that shares a chat line with an avatar and must read as alive at 20–64px instead of as a stalled spinner.
 *
 * **Registry:** AICSS — `@aicss/orbs` ([docs](https://www.aicss.dev/components/orbs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Orb } from '@/registries/aicss/Orb'

const meta: Meta<typeof Orb> = {
  title: 'AICSS/Orbs',
  component: Orb,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Orb>

export const Default: Story = {}
