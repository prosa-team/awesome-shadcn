/**
 * Micro-interaction | Two modes are switched constantly and the bar must make the current one unmistakable.
 *
 * **Registry:** Watermelon UI — `@watermelon/quick-switcher` ([docs](https://ui.watermelon.sh/animated-components/quick-switcher))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { QuickSwitcher } from '@/registries/watermelon/components/ui/quick-switcher'

const meta: Meta<typeof QuickSwitcher> = {
  title: 'Watermelon UI/Quick Switcher',
  component: QuickSwitcher,
  tags: ['autodocs'],
  args: {
    askIcon: "Sample",
    generateIcon: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof QuickSwitcher>

export const Default: Story = {}
