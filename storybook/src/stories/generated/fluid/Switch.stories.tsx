/**
 * An instant-effect setting where the toggle itself is the confirmation, since there is no save button.
 *
 * **Registry:** Fluid Functionalism — `@fluid/switch` ([docs](https://www.fluidfunctionalism.com/docs/switch))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from '@/registries/fluid/components/ui/switch'

const meta: Meta<typeof Switch> = {
  title: 'Fluid Functionalism/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}
