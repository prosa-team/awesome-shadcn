/**
 * The demo video must not autoplay in the hero, but the thumbnail should open it in a proper dialog.
 *
 * **Registry:** Magic UI — `@magicui/hero-video-dialog` ([docs](https://magicui.design/docs/components/hero-video-dialog))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HeroVideoDialog } from '@/registries/magicui/ui/hero-video-dialog'

const meta: Meta<typeof HeroVideoDialog> = {
  title: 'Magic UI/Hero Video Dialog',
  component: HeroVideoDialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeroVideoDialog>

export const Default: Story = {}
