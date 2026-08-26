/**
 * You need images that resolve from a blurred placeholder into the full photo.
 *
 * **Registry:** interior.dev — `@interior/blur-up-image` ([docs](https://interior.dev/docs/blur-up-image))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BlurUpImage } from '@/registries/interior/components/interior/blur-up-image'

const meta: Meta<typeof BlurUpImage> = {
  title: 'interior.dev/Blur-up Image',
  component: BlurUpImage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BlurUpImage>

export const Default: Story = {}
