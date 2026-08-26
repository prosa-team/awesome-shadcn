/**
 * A modal that must not feel abrupt — it should arrive from and return to its trigger.
 *
 * **Registry:** Fluid Functionalism — `@fluid/dialog` ([docs](https://www.fluidfunctionalism.com/docs/dialog))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dialog } from '@/registries/fluid/components/ui/dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Fluid Functionalism/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {}
