/**
 * 7 variants — edge panels from each side.
 *
 * **Registry:** Watermelon UI — `@watermelon/sheet` ([docs](https://ui.watermelon.sh/components/sheet))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Sheet } from '@/registries/watermelon/components/ui/sheet'

const meta: Meta<typeof Sheet> = {
  title: 'Watermelon UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {}
