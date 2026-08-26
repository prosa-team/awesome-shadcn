/**
 * You need infinite-scroll loading that starts before the user hits the bottom.
 *
 * **Registry:** interior.dev — `@interior/load-more` ([docs](https://interior.dev/docs/load-more))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LoadMore } from '@/registries/interior/components/interior/load-more'

const meta: Meta<typeof LoadMore> = {
  title: 'interior.dev/Load More',
  component: LoadMore,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadMore>

export const Default: Story = {}
