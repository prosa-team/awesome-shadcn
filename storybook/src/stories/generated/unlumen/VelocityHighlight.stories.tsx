/**
 * Emphasis should react to how fast the user scrolls, tying the effect to their own input.
 *
 * **Registry:** Unlumen UI — `@unlumen/velocity-highlight` ([docs](https://ui.unlumen.com/docs/ui/unlumen/velocity-highlight))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Highlight } from '@/registries/unlumen/components/unlumen-ui/primitives/effects/velocity-highlight'

const meta: Meta<typeof Highlight> = {
  title: 'Unlumen UI/Velocity Highlight',
  component: Highlight,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Highlight>

export const Default: Story = {}
