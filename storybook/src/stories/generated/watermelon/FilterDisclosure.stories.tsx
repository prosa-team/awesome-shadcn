/**
 * Filters | Filters should stay collapsed until needed, while still showing that some are active.
 *
 * **Registry:** Watermelon UI — `@watermelon/filter-disclosure` ([docs](https://ui.watermelon.sh/animated-components/filter-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FilterDisclosure } from '@/registries/watermelon/components/ui/filter-disclosure'

const meta: Meta<typeof FilterDisclosure> = {
  title: 'Watermelon UI/Filter Disclosure',
  component: FilterDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterDisclosure>

export const Default: Story = {}
