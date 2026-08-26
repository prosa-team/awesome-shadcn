/**
 * Emoji appear in user-generated content and must render identically on Windows, Android, and iOS.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/twemoji` ([docs](https://chanhdai.com/components/twemoji))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Twemoji } from '@/registries/ncdai/twemoji'

const meta: Meta<typeof Twemoji> = {
  title: 'Chánh Đại Components/Twemoji',
  component: Twemoji,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof Twemoji>

export const Default: Story = {}
