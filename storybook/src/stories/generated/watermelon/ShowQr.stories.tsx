/**
 * Widgets | A QR code is revealed on demand — tickets, payments, device pairing.
 *
 * **Registry:** Watermelon UI — `@watermelon/show-qr` ([docs](https://ui.watermelon.sh/animated-components/show-qr))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShowQr } from '@/registries/watermelon/components/ui/show-qr'

const meta: Meta<typeof ShowQr> = {
  title: 'Watermelon UI/Show QR',
  component: ShowQr,
  tags: ['autodocs'],
  args: {
    value: "item-1",
  },
}

export default meta
type Story = StoryObj<typeof ShowQr>

export const Default: Story = {}
