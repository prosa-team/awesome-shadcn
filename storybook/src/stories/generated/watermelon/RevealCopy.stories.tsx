/**
 * Micro-interaction | Sensitive text stays hidden until revealed deliberately — keys, tokens, recovery codes.
 *
 * **Registry:** Watermelon UI — `@watermelon/reveal-copy` ([docs](https://ui.watermelon.sh/animated-components/reveal-copy))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RevealAndCopy } from '@/registries/watermelon/components/ui/reveal-copy'

const meta: Meta<typeof RevealAndCopy> = {
  title: 'Watermelon UI/Reveal Copy',
  component: RevealAndCopy,
  tags: ['autodocs'],
  args: {
    cardNumber: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof RevealAndCopy>

export const Default: Story = {}
