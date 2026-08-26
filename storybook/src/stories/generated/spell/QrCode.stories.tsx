/**
 * The page bridges to a phone — app download, ticket, menu — and the code should match the design.
 *
 * **Registry:** Spell UI — `@spell/qr-code` ([docs](https://spell.sh/docs/qr-code))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { QRCode } from '@/registries/spell/qr-code'

const meta: Meta<typeof QRCode> = {
  title: 'Spell UI/QR Code',
  component: QRCode,
  tags: ['autodocs'],
  args: {
    value: "item-1",
  },
}

export default meta
type Story = StoryObj<typeof QRCode>

export const Default: Story = {}
