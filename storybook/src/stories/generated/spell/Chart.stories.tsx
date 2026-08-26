/**
 * A landing page shows real numbers and the chart should invite hovering instead of sitting there as an image.
 *
 * **Registry:** Spell UI — `@spell/chart` ([docs](https://spell.sh/docs/chart))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chart } from '@/registries/spell/chart'

const meta: Meta<typeof Chart> = {
  title: 'Spell UI/Chart',
  component: Chart,
  tags: ['autodocs'],
  args: {
    data: [1, 2, 3],
  },
}

export default meta
type Story = StoryObj<typeof Chart>

export const Default: Story = {}
