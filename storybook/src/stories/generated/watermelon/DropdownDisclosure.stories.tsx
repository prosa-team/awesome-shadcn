/**
 * Micro-interaction | Selecting an item should animate the selection into the trigger rather than closing abruptly.
 *
 * **Registry:** Watermelon UI — `@watermelon/dropdown-disclosure` ([docs](https://ui.watermelon.sh/animated-components/dropdown-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DropdownDisclosure } from '@/registries/watermelon/components/ui/dropdown-disclosure'

const meta: Meta<typeof DropdownDisclosure> = {
  title: 'Watermelon UI/Dropdown Disclosure',
  component: DropdownDisclosure,
  tags: ['autodocs'],
  args: {
    isOpen: true,
  },
}

export default meta
type Story = StoryObj<typeof DropdownDisclosure>

export const Default: Story = {}
