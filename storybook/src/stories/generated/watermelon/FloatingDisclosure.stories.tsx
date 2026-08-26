/**
 * Popover | A compact action menu that resizes to its content, with a floating close affordance.
 *
 * **Registry:** Watermelon UI — `@watermelon/floating-disclosure` ([docs](https://ui.watermelon.sh/animated-components/floating-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FloatingDisclosure } from '@/registries/watermelon/components/ui/floating-disclosure'

const meta: Meta<typeof FloatingDisclosure> = {
  title: 'Watermelon UI/Floating Disclosure',
  component: FloatingDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FloatingDisclosure>

export const Default: Story = {}
