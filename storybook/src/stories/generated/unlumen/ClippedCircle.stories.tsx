/**
 * A section or image reveals through an expanding circular clip, used as a transition between states.
 *
 * **Registry:** Unlumen UI — `@unlumen/clipped-circle` ([docs](https://ui.unlumen.com/docs/ui/effects/clipped-circle))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ClippedCircle } from '@/registries/unlumen/components/unlumen-ui/clipped-circle'

const meta: Meta<typeof ClippedCircle> = {
  title: 'Unlumen UI/Clipped Circle',
  component: ClippedCircle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ClippedCircle>

export const Default: Story = {}
