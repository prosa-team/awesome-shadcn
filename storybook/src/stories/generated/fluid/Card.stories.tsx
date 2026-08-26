/**
 * A container that has to hold the set's surface treatment, so nested controls do not look pasted on.
 *
 * **Registry:** Fluid Functionalism — `@fluid/card` ([docs](https://www.fluidfunctionalism.com/docs/card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/registries/fluid/ui/card'

const meta: Meta<typeof Card> = {
  title: 'Fluid Functionalism/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}
