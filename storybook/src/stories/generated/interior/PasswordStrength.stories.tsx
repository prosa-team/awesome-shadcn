/**
 * You need a strength meter that reads segment by segment as the user types.
 *
 * **Registry:** interior.dev — `@interior/password-strength` ([docs](https://interior.dev/docs/password-strength))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PasswordStrength } from '@/registries/interior/components/interior/password-strength'

const meta: Meta<typeof PasswordStrength> = {
  title: 'interior.dev/Password Strength',
  component: PasswordStrength,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PasswordStrength>

export const Default: Story = {}
