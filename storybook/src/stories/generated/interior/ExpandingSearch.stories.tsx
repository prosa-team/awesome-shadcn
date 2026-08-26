/**
 * You need a search icon that expands into a focused field.
 *
 * **Registry:** interior.dev — `@interior/expanding-search` ([docs](https://interior.dev/docs/expanding-search))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ExpandingSearch } from '@/registries/interior/components/interior/expanding-search'

const meta: Meta<typeof ExpandingSearch> = {
  title: 'interior.dev/Expanding Search',
  component: ExpandingSearch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExpandingSearch>

export const Default: Story = {}
