/**
 * You need a tag input where Enter adds and backspace highlights before removing.
 *
 * **Registry:** interior.dev — `@interior/tag-input` ([docs](https://interior.dev/docs/tag-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TagInput } from '@/registries/interior/components/interior/tag-input'

const meta: Meta<typeof TagInput> = {
  title: 'interior.dev/Tag Input',
  component: TagInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TagInput>

export const Default: Story = {}
