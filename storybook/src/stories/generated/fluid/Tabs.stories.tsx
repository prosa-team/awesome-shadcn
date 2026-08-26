/**
 * Primary section switching where the indicator should carry the eye across.
 *
 * **Registry:** Fluid Functionalism — `@fluid/tabs` ([docs](https://www.fluidfunctionalism.com/docs/tabs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@/registries/fluid/components/ui/tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Fluid Functionalism/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {}
