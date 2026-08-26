/**
 * Headline lines should rise in sequence, giving the section a beat as it enters.
 *
 * **Registry:** Spell UI — `@spell/slide-up-text` ([docs](https://spell.sh/docs/slide-up-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SlideUpText } from '@/registries/spell/slide-up-text'

const meta: Meta<typeof SlideUpText> = {
  title: 'Spell UI/Slide Up Text',
  component: SlideUpText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof SlideUpText>

export const Default: Story = {}
