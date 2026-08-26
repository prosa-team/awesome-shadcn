/**
 * Milestones plotted against a real time axis, where the *gaps* between events carry meaning a plain list would flatten.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/timescale` ([docs](https://chanhdai.com/components/timescale))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TimescaleRoot } from '@/registries/ncdai/timescale'

const meta: Meta<typeof TimescaleRoot> = {
  title: 'Chánh Đại Components/Timescale',
  component: TimescaleRoot,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TimescaleRoot>

export const Default: Story = {}
