/**
 * You need an image lightbox that zooms in and returns to its origin on close.
 *
 * **Registry:** interior.dev — `@interior/lightbox` ([docs](https://interior.dev/docs/lightbox))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Lightbox } from '@/registries/interior/components/interior/lightbox'

const meta: Meta<typeof Lightbox> = {
  title: 'interior.dev/Lightbox',
  component: Lightbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Lightbox>

export const Default: Story = {}
