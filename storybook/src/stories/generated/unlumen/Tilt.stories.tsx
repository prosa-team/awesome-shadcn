/**
 * You want the same tilt behaviour around your own content — the primitive behind Tilt Card.
 *
 * **Registry:** Unlumen UI — `@unlumen/tilt` ([docs](https://ui.unlumen.com/docs/ui/unlumen/tilt))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tilt } from '@/registries/unlumen/components/unlumen-ui/tilt'

const meta: Meta<typeof Tilt> = {
  title: 'Unlumen UI/Tilt',
  component: Tilt,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tilt>

export const Default: Story = {}
