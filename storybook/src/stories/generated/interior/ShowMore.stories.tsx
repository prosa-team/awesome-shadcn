/**
 * You need a "show more" toggle that animates height without reflowing text.
 *
 * **Registry:** interior.dev — `@interior/show-more` ([docs](https://interior.dev/docs/show-more))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShowMore } from '@/registries/interior/components/interior/show-more'

const meta: Meta<typeof ShowMore> = {
  title: 'interior.dev/Show More',
  component: ShowMore,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShowMore>

export const Default: Story = {}
