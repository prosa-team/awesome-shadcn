/**
 * Micro-interaction | A copy action must confirm visibly and reset itself, without the button changing width.
 *
 * **Registry:** Watermelon UI — `@watermelon/copy-confirm` ([docs](https://ui.watermelon.sh/animated-components/copy-confirm))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import CopyConfirm from '@/registries/watermelon/components/ui/copy-confirm'

const meta: Meta<typeof CopyConfirm> = {
  title: 'Watermelon UI/Copy Confirm',
  component: CopyConfirm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CopyConfirm>

export const Default: Story = {}
