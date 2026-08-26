/**
 * Micro-interaction | A field splits into editable segments — codes, dates, or structured values.
 *
 * **Registry:** Watermelon UI — `@watermelon/split-to-edit` ([docs](https://ui.watermelon.sh/animated-components/split-to-edit))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SplitToEdit } from '@/registries/watermelon/components/ui/split-to-edit'

const meta: Meta<typeof SplitToEdit> = {
  title: 'Watermelon UI/Split To Edit',
  component: SplitToEdit,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SplitToEdit>

export const Default: Story = {}
