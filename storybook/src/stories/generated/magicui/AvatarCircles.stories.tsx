/**
 * Social proof near the call to action: overlapping faces plus a count, in the width of a button.
 *
 * **Registry:** Magic UI — `@magicui/avatar-circles` ([docs](https://magicui.design/docs/components/avatar-circles))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AvatarCircles } from '@/registries/magicui/ui/avatar-circles'

const meta: Meta<typeof AvatarCircles> = {
  title: 'Magic UI/Avatar Circles',
  component: AvatarCircles,
  tags: ['autodocs'],
  args: {
    avatarUrls: [{ imageUrl: "https://github.com/shadcn.png", profileUrl: "Sample" }, { imageUrl: "https://github.com/shadcn.png 2", profileUrl: "Sample 2" }, { imageUrl: "https://github.com/shadcn.png 3", profileUrl: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof AvatarCircles>

export const Default: Story = {}
