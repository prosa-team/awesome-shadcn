/**
 * Micro-interaction | Speech becomes text live, and the user must see it appearing to trust it.
 *
 * **Registry:** Watermelon UI — `@watermelon/voice-transcribe` ([docs](https://ui.watermelon.sh/animated-components/voice-transcribe))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TranscribeVoiceMessage } from '@/registries/watermelon/components/ui/voice-transcribe'

const meta: Meta<typeof TranscribeVoiceMessage> = {
  title: 'Watermelon UI/Voice Transcribe',
  component: TranscribeVoiceMessage,
  tags: ['autodocs'],
  args: {
    duration: 1,
    transcription: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof TranscribeVoiceMessage>

export const Default: Story = {}
