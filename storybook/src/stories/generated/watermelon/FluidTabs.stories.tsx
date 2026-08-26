/**
 * Tabs | A floating indicator with icon scaling — the most animated of the three tab options.
 *
 * **Registry:** Watermelon UI — `@watermelon/fluid-tabs` ([docs](https://ui.watermelon.sh/animated-components/fluid-tabs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FluidTabs } from '@/registries/watermelon/components/ui/fluid-tabs'

const meta: Meta<typeof FluidTabs> = {
  title: 'Watermelon UI/Fluid Tabs',
  component: FluidTabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FluidTabs>

export const Default: Story = {}
