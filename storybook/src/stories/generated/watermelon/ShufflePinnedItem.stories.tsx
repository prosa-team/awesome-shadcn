/**
 * Lists | The pinned item becomes a hero header, so priority is expressed by layout and not just position.
 *
 * **Registry:** Watermelon UI — `@watermelon/shuffle-pinned-item` ([docs](https://ui.watermelon.sh/animated-components/shuffle-pinned-item))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShufflePinnedList } from '@/registries/watermelon/components/ui/shuffle-pinned-item'

const meta: Meta<typeof ShufflePinnedList> = {
  title: 'Watermelon UI/Shuffle Pinned List',
  component: ShufflePinnedList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShufflePinnedList>

export const Default: Story = {}
