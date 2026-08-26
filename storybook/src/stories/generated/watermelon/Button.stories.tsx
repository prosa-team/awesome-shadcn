/**
 * 38 variants — the reason to come here first when the design has no button style yet.
 *
 * **Registry:** Watermelon UI — `@watermelon/button` ([docs](https://ui.watermelon.sh/components/button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registries/watermelon/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Watermelon UI/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
