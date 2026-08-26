/**
 * A statement reveals as it scrolls into view, slowing the reader down on purpose.
 *
 * **Registry:** Unlumen UI — `@unlumen/text-reveal` ([docs](https://ui.unlumen.com/docs/ui/unlumen/text-reveal))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextReveal } from '@/registries/unlumen/components/unlumen-ui/text-reveal'

const meta: Meta<typeof TextReveal> = {
  title: 'Unlumen UI/Text Reveal',
  component: TextReveal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextReveal>

export const Default: Story = {}
