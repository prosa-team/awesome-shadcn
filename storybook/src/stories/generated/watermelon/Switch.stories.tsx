/**
 * 18 variants — including icon and labelled thumbs.
 *
 * **Registry:** Watermelon UI — `@watermelon/switch` ([docs](https://ui.watermelon.sh/components/switch))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from '@/registries/watermelon/components/ui/switch'

const meta: Meta<typeof Switch> = {
  title: 'Watermelon UI/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}
