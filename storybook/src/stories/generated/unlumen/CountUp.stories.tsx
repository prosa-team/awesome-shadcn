/**
 * Metrics should count when they enter the viewport, so the numbers get read instead of scrolled past.
 *
 * **Registry:** Unlumen UI — `@unlumen/count-up` ([docs](https://ui.unlumen.com/docs/ui/effects/count-up))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CountUp } from '@/registries/unlumen/components/unlumen-ui/count-up'

const meta: Meta<typeof CountUp> = {
  title: 'Unlumen UI/Count Up',
  component: CountUp,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CountUp>

export const Default: Story = {}
