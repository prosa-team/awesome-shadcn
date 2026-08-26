/**
 * Users are international, so country codes and per-country formats must be part of the input.
 *
 * **Registry:** ReUI — `@reui/phone-input` ([docs](https://reui.io/components/phone-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PhoneInput } from '@/registries/reui/components/reui/phone-input'

const meta: Meta<typeof PhoneInput> = {
  title: 'ReUI/Phone Input',
  component: PhoneInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PhoneInput>

export const Default: Story = {}
