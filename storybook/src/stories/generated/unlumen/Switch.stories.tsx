/**
 * A toggle whose thumb motion should match the rest of this set.
 *
 * **Registry:** Unlumen UI — `@unlumen/switch` ([docs](https://ui.unlumen.com/docs/ui/unlumen/switch))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from '@/registries/unlumen/components/unlumen-ui/switch'

const meta: Meta<typeof Switch> = {
  title: 'Unlumen UI/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}
