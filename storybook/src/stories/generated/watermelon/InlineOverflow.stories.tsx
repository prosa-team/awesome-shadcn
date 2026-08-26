/**
 * Disclosure | A row has more actions than fit, and the extra ones should spring out inline rather than in a menu.
 *
 * **Registry:** Watermelon UI — `@watermelon/inline-overflow` ([docs](https://ui.watermelon.sh/animated-components/inline-overflow))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineOverflow } from '@/registries/watermelon/components/ui/inline-overflow'

const meta: Meta<typeof InlineOverflow> = {
  title: 'Watermelon UI/Inline Overflow',
  component: InlineOverflow,
  tags: ['autodocs'],
  args: {
    visibleActions: [{ label: "Registry component" }, { label: "Registry component 2" }, { label: "Registry component 3" }],
    hiddenActions: [{ label: "Registry component" }, { label: "Registry component 2" }, { label: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof InlineOverflow>

export const Default: Story = {}
