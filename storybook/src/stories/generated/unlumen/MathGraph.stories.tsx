/**
 * A technical page needs a plotted curve as decoration, without pulling in a charting library.
 *
 * **Registry:** Unlumen UI — `@unlumen/math-graph` ([docs](https://ui.unlumen.com/docs/ui/effects/math-graph))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MathGraph } from '@/registries/unlumen/components/unlumen-ui/math-graph'

const meta: Meta<typeof MathGraph> = {
  title: 'Unlumen UI/Math Graph',
  component: MathGraph,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MathGraph>

export const Default: Story = {}
