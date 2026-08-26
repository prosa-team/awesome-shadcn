/**
 * Tabs | Button-like tabs with a sliding pill, for filter bars and view switching.
 *
 * **Registry:** Watermelon UI — `@watermelon/continuous-tabs` ([docs](https://ui.watermelon.sh/animated-components/continuous-tabs))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContinuousTabs } from '@/registries/watermelon/components/ui/continuous-tabs'

const meta: Meta<typeof ContinuousTabs> = {
  title: 'Watermelon UI/Continuous Tabs',
  component: ContinuousTabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ContinuousTabs>

export const Default: Story = {}
