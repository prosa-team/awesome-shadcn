/**
 * The hover target is large (a map, a chart, an image) and a corner-anchored tooltip would lose the pointer.
 *
 * **Registry:** Unlumen UI — `@unlumen/floating-tooltip` ([docs](https://ui.unlumen.com/docs/ui/unlumen/floating-tooltip))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FloatingTooltipProvider } from '@/registries/unlumen/components/unlumen-ui/floating-tooltip'

const meta: Meta<typeof FloatingTooltipProvider> = {
  title: 'Unlumen UI/Floating Tooltip',
  component: FloatingTooltipProvider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FloatingTooltipProvider>

export const Default: Story = {}
