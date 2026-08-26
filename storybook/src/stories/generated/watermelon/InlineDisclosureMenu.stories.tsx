/**
 * Dropdown | Contextual options including delete, with a two-step confirm so destructive clicks cannot slip through.
 *
 * **Registry:** Watermelon UI — `@watermelon/inline-disclosure-menu` ([docs](https://ui.watermelon.sh/animated-components/inline-disclosure-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineDisclosureMenu } from '@/registries/watermelon/components/ui/inline-disclosure-menu'

const meta: Meta<typeof InlineDisclosureMenu> = {
  title: 'Watermelon UI/Inline Disclosure Menu',
  component: InlineDisclosureMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InlineDisclosureMenu>

export const Default: Story = {}
