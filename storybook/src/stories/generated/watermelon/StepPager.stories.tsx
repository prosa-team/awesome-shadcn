/**
 * Micro-interaction | Steps are paged through, with icons transitioning to show direction of travel.
 *
 * **Registry:** Watermelon UI — `@watermelon/step-pager` ([docs](https://ui.watermelon.sh/animated-components/step-pager))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StepPager } from '@/registries/watermelon/components/ui/step-pager'

const meta: Meta<typeof StepPager> = {
  title: 'Watermelon UI/Step Pager',
  component: StepPager,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StepPager>

export const Default: Story = {}
