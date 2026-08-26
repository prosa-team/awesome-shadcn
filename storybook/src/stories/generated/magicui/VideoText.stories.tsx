/**
 * Video plays inside the letterforms of a headline, for a bold single-word hero.
 *
 * **Registry:** Magic UI — `@magicui/video-text` ([docs](https://magicui.design/docs/components/video-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { VideoText } from '@/registries/magicui/ui/video-text'

const meta: Meta<typeof VideoText> = {
  title: 'Magic UI/Video Text',
  component: VideoText,
  tags: ['autodocs'],
  args: {
    src: "https://ui.shadcn.com",
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof VideoText>

export const Default: Story = {}
