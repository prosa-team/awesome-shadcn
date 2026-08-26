/**
 * An image should resolve from pixelation, turning a plain asset into a reveal.
 *
 * **Registry:** Magic UI — `@magicui/pixel-image` ([docs](https://magicui.design/docs/components/pixel-image))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PixelImage } from '@/registries/magicui/ui/pixel-image'

const meta: Meta<typeof PixelImage> = {
  title: 'Magic UI/Pixel Image',
  component: PixelImage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PixelImage>

export const Default: Story = {}
