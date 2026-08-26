/**
 * Options come from a server as the user types — debouncing, loading, and empty results are part of the problem.
 *
 * **Registry:** ReUI — `@reui/autocomplete` ([docs](https://reui.io/components/autocomplete))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Autocomplete } from '@/registries/reui/components/reui/autocomplete'

const meta: Meta<typeof Autocomplete> = {
  title: 'ReUI/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {}
