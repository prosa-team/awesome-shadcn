/**
 * The primary action should confirm the press physically — the baseline this whole set is tuned against.
 *
 * **Registry:** Fluid Functionalism — `@fluid/button` ([docs](https://www.fluidfunctionalism.com/docs/button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registries/fluid/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Fluid Functionalism/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
