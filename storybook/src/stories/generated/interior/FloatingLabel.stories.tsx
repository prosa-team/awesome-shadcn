/**
 * You need form labels that float out of the way instead of disappearing on focus.
 *
 * **Registry:** interior.dev — `@interior/floating-label` ([docs](https://interior.dev/docs/floating-label))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FloatingLabelInput } from '@/registries/interior/components/interior/floating-label'

const meta: Meta<typeof FloatingLabelInput> = {
  title: 'interior.dev/Floating Label',
  component: FloatingLabelInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FloatingLabelInput>

export const Default: Story = {}
