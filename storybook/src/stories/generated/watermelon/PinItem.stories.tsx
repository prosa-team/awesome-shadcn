/**
 * Lists | Users promote items to the top and the move must be visible, not a silent reorder.
 *
 * **Registry:** Watermelon UI — `@watermelon/pin-item` ([docs](https://ui.watermelon.sh/animated-components/pin-item))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PinItemComponent } from '@/registries/watermelon/components/ui/pin-item'

const meta: Meta<typeof PinItemComponent> = {
  title: 'Watermelon UI/Pin Item',
  component: PinItemComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PinItemComponent>

export const Default: Story = {}
