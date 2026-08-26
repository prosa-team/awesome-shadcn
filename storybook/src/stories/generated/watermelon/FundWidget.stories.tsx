/**
 * Widgets | A fund or balance widget with 3D transforms, for finance dashboards.
 *
 * **Registry:** Watermelon UI — `@watermelon/fund-widget` ([docs](https://ui.watermelon.sh/animated-components/fund-widget))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FundWidget } from '@/registries/watermelon/components/ui/fund-widget'

const meta: Meta<typeof FundWidget> = {
  title: 'Watermelon UI/Fund Widget',
  component: FundWidget,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FundWidget>

export const Default: Story = {}
