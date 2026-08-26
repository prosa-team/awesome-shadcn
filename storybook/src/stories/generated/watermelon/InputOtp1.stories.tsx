/**
 * 10 variants — verification code entry in several box styles.
 *
 * **Registry:** Watermelon UI — `@watermelon/input-otp-1` ([docs](https://ui.watermelon.sh/components/input-otp))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import InputOtp1 from '@/registries/watermelon/components/ui/input-otp-1'

const meta: Meta<typeof InputOtp1> = {
  title: 'Watermelon UI/Input OTP',
  component: InputOtp1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputOtp1>

export const Default: Story = {}
