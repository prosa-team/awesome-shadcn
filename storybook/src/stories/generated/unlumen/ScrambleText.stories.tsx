/**
 * Technical copy should resolve out of noise, matching a terminal or security brand.
 *
 * **Registry:** Unlumen UI — `@unlumen/scramble-text` ([docs](https://ui.unlumen.com/docs/ui/unlumen/scramble-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrambleText } from '@/registries/unlumen/components/unlumen-ui/scramble-text'

const meta: Meta<typeof ScrambleText> = {
  title: 'Unlumen UI/Scramble Text',
  component: ScrambleText,
  tags: ['autodocs'],
  args: {
    text: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof ScrambleText>

export const Default: Story = {}
