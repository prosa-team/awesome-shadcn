/**
 * Micro-interaction | A chip's text is corrected in place, for filters and tags that are often slightly wrong.
 *
 * **Registry:** Watermelon UI — `@watermelon/editable-chip` ([docs](https://ui.watermelon.sh/animated-components/editable-chip))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { EditableChip } from '@/registries/watermelon/components/ui/editable-chip'

const meta: Meta<typeof EditableChip> = {
  title: 'Watermelon UI/Editable Chip',
  component: EditableChip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EditableChip>

export const Default: Story = {}
