/**
 * 23 variants — modal treatments from minimal to full-bleed.
 *
 * **Registry:** Watermelon UI — `@watermelon/dialog` ([docs](https://ui.watermelon.sh/components/dialog))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dialog } from '@/registries/watermelon/components/ui/dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Watermelon UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {}
