/**
 * A hero headline that names several audiences or use cases by rotating the last word.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/text-flip` ([docs](https://chanhdai.com/components/text-flip))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextFlip } from '@/registries/ncdai/text-flip'

const meta: Meta<typeof TextFlip> = {
  title: 'Chánh Đại Components/Text Flip',
  component: TextFlip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextFlip>

export const Default: Story = {}
