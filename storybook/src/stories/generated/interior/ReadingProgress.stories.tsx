/**
 * You need a reading-progress indicator showing how much content is left.
 *
 * **Registry:** interior.dev — `@interior/reading-progress` ([docs](https://interior.dev/docs/reading-progress))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ReadingProgress } from '@/registries/interior/components/interior/reading-progress'

const meta: Meta<typeof ReadingProgress> = {
  title: 'interior.dev/Reading Progress',
  component: ReadingProgress,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ReadingProgress>

export const Default: Story = {}
