/**
 * A hero or section background that should react to the pointer without becoming the subject of the page.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/dot-grid-spotlight` ([docs](https://chanhdai.com/components/dot-grid-spotlight))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotGridSpotlight } from '@/registries/ncdai/dot-grid-spotlight'

const meta: Meta<typeof DotGridSpotlight> = {
  title: 'Chánh Đại Components/Dot Grid Spotlight',
  component: DotGridSpotlight,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotGridSpotlight>

export const Default: Story = {}
