/**
 * Interaction | A live voice call collapses to a pill with stacked avatars and speaking indicators.
 *
 * **Registry:** Watermelon UI — `@watermelon/voice-chat-disclosure` ([docs](https://ui.watermelon.sh/animated-components/voice-chat-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { VoiceChatDisclosure } from '@/registries/watermelon/components/ui/voice-chat-disclosure'

const meta: Meta<typeof VoiceChatDisclosure> = {
  title: 'Watermelon UI/Voice Chat Disclosure',
  component: VoiceChatDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VoiceChatDisclosure>

export const Default: Story = {}
