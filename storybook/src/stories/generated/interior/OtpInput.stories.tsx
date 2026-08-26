/**
 * You need a one-time-code input with auto-advance, paste, and error recovery.
 *
 * **Registry:** interior.dev — `@interior/otp-input` ([docs](https://interior.dev/docs/otp-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OtpInput } from '@/registries/interior/components/interior/otp-input'

const meta: Meta<typeof OtpInput> = {
  title: 'interior.dev/OTP Input',
  component: OtpInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OtpInput>

export const Default: Story = {}
