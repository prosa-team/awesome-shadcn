/**
 * Navigation | A palette with sectioned results and keyboard navigation, for apps with many destinations.
 *
 * **Registry:** Watermelon UI — `@watermelon/command-search` ([docs](https://ui.watermelon.sh/animated-components/command-search))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CommandSearch } from '@/registries/watermelon/components/ui/command-search'

const meta: Meta<typeof CommandSearch> = {
  title: 'Watermelon UI/Command Search',
  component: CommandSearch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CommandSearch>

export const Default: Story = {}
