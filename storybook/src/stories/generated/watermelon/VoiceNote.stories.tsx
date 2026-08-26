/**
 * Micro-interaction | Audio messages are recorded, previewed, and deleted before sending.
 *
 * **Registry:** Watermelon UI — `@watermelon/voice-note` ([docs](https://ui.watermelon.sh/animated-components/voice-note))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { VoiceNote } from '@/registries/watermelon/components/ui/voice-note'

const meta: Meta<typeof VoiceNote> = {
  title: 'Watermelon UI/Voice Note',
  component: VoiceNote,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VoiceNote>

export const Default: Story = {}
