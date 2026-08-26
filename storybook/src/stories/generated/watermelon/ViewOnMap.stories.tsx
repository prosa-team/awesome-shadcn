/**
 * Map | A location needs pins, zoom, and directions inline, without a full mapping page.
 *
 * **Registry:** Watermelon UI — `@watermelon/view-on-map` ([docs](https://ui.watermelon.sh/animated-components/view-on-map))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ViewOnMap } from '@/registries/watermelon/components/ui/view-on-map'

const meta: Meta<typeof ViewOnMap> = {
  title: 'Watermelon UI/View On Map',
  component: ViewOnMap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ViewOnMap>

export const Default: Story = {}
