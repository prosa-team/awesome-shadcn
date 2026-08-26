/**
 * One status must be visible in peripheral vision — live, recording, new — without becoming an alarm.
 *
 * **Registry:** Unlumen UI — `@unlumen/glowing-badge` ([docs](https://ui.unlumen.com/docs/ui/unlumen/glowing-badge))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GlowingBadge } from '@/registries/unlumen/components/unlumen-ui/glowing-badge'

const meta: Meta<typeof GlowingBadge> = {
  title: 'Unlumen UI/Glowing Badge',
  component: GlowingBadge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GlowingBadge>

export const Default: Story = {}
