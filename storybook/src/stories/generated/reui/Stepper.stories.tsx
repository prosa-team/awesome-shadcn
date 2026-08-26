/**
 * A form is long enough that users need to see progress and go back without losing input.
 *
 * **Registry:** ReUI — `@reui/stepper` ([docs](https://reui.io/components/stepper))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stepper } from '@/registries/reui/components/reui/stepper'

const meta: Meta<typeof Stepper> = {
  title: 'ReUI/Stepper',
  component: Stepper,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Default: Story = {}
