/**
 * An icon changes meaning mid-interaction (play/pause, copy/copied) and should scale-blur across instead of popping.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/icon-swap` ([docs](https://chanhdai.com/components/icon-swap))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconSwap } from '@/registries/ncdai/icon-swap'

const meta: Meta<typeof IconSwap> = {
  title: 'Chánh Đại Components/Icon Swap',
  component: IconSwap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconSwap>

export const Default: Story = {}
