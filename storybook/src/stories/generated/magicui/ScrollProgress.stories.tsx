/**
 * Long-form content needs a reading indicator so the length is visible from the first screen.
 *
 * **Registry:** Magic UI — `@magicui/scroll-progress` ([docs](https://magicui.design/docs/components/scroll-progress))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollProgress } from '@/registries/magicui/ui/scroll-progress'

const meta: Meta<typeof ScrollProgress> = {
  title: 'Magic UI/Scroll Progress',
  component: ScrollProgress,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollProgress>

export const Default: Story = {}
