/**
 * Media | Audio is navigated by its waveform, because a plain progress bar hides where the content is.
 *
 * **Registry:** Watermelon UI — `@watermelon/waveform-scrub` ([docs](https://ui.watermelon.sh/animated-components/waveform-scrub))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WaveformScrub } from '@/registries/watermelon/components/ui/waveform-scrub'

const meta: Meta<typeof WaveformScrub> = {
  title: 'Watermelon UI/Waveform Scrub',
  component: WaveformScrub,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WaveformScrub>

export const Default: Story = {}
