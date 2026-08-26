/**
 * A link should preview its destination, so the user can decide without navigating away.
 *
 * **Registry:** Unlumen UI — `@unlumen/tooltip-preview` ([docs](https://ui.unlumen.com/docs/ui/unlumen/tooltip-preview))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TooltipPreview } from '@/registries/unlumen/components/unlumen-ui/tooltip-preview'

const meta: Meta<typeof TooltipPreview> = {
  title: 'Unlumen UI/Tooltip Preview',
  component: TooltipPreview,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TooltipPreview>

export const Default: Story = {}
