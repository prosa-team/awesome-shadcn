/**
 * Dense controls need labels on hover, with delays tuned so passing the cursor over a toolbar does not flash.
 *
 * **Registry:** Fluid Functionalism — `@fluid/tooltip` ([docs](https://www.fluidfunctionalism.com/docs/tooltip))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip } from '@/registries/fluid/components/ui/tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Fluid Functionalism/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}
