/**
 * Status labels sit beside these controls and stock shadcn badges would look flat next to them.
 *
 * **Registry:** Fluid Functionalism — `@fluid/badge` ([docs](https://www.fluidfunctionalism.com/docs/badge))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registries/fluid/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Fluid Functionalism/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
