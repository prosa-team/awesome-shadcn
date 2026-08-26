/**
 * Shortcut labels sit next to this set's command menu and should share its styling.
 *
 * **Registry:** Unlumen UI — `@unlumen/kbd` ([docs](https://ui.unlumen.com/docs/ui/unlumen/kbd))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Kbd } from '@/registries/unlumen/components/unlumen-ui/kbd'

const meta: Meta<typeof Kbd> = {
  title: 'Unlumen UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {}
