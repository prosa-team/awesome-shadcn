/**
 * Micro-interaction | Pasting is triggered by shortcut and the panel confirms what landed — codes, links, snippets.
 *
 * **Registry:** Watermelon UI — `@watermelon/quick-paste` ([docs](https://ui.watermelon.sh/animated-components/quick-paste))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { QuickPaste } from '@/registries/watermelon/components/ui/quick-paste'

const meta: Meta<typeof QuickPaste> = {
  title: 'Watermelon UI/Quick Paste',
  component: QuickPaste,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuickPaste>

export const Default: Story = {}
