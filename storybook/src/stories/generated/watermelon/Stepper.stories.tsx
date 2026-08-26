/**
 * Buttons | A quantity is nudged up and down, with digits rolling so the change is legible at a glance.
 *
 * **Registry:** Watermelon UI — `@watermelon/stepper` ([docs](https://ui.watermelon.sh/animated-components/stepper))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stepper } from '@/registries/watermelon/components/ui/stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Watermelon UI/Stepper',
  component: Stepper,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Default: Story = {}
