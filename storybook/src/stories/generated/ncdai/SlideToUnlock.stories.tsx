/**
 * A consequential action where a click is too cheap and a confirm dialog is too heavy — the gesture is the confirmation.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/slide-to-unlock` ([docs](https://chanhdai.com/components/slide-to-unlock))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SlideToUnlock } from '@/registries/ncdai/slide-to-unlock'

const meta: Meta<typeof SlideToUnlock> = {
  title: 'Chánh Đại Components/Slide to Unlock',
  component: SlideToUnlock,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SlideToUnlock>

export const Default: Story = {}
