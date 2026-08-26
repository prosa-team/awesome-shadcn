/**
 * You need a play/pause or menu/close icon that morphs between states instead of swapping.
 *
 * **Registry:** interior.dev — `@interior/icon-morph` ([docs](https://interior.dev/docs/icon-morph))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconMorph } from '@/registries/interior/components/interior/icon-morph'

const meta: Meta<typeof IconMorph> = {
  title: 'interior.dev/Icon Morph',
  component: IconMorph,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconMorph>

export const Default: Story = {}
