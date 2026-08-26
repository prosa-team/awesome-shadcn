/**
 * A phrase inside a heading should be emphasised on entry rather than merely coloured.
 *
 * **Registry:** Unlumen UI — `@unlumen/highlight` ([docs](https://ui.unlumen.com/docs/ui/unlumen/highlight))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Highlight } from '@/registries/unlumen/components/unlumen-ui/primitives/effects/highlight'

const meta: Meta<typeof Highlight> = {
  title: 'Unlumen UI/Highlight',
  component: Highlight,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Highlight>

export const Default: Story = {}
