/**
 * A headline should arrive under a sweeping colour band and settle into the theme foreground.
 *
 * **Registry:** Magic UI — `@magicui/dia-text-reveal` ([docs](https://magicui.design/docs/components/dia-text-reveal))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DiaTextReveal } from '@/registries/magicui/ui/dia-text-reveal'

const meta: Meta<typeof DiaTextReveal> = {
  title: 'Magic UI/Dia Text Reveal',
  component: DiaTextReveal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DiaTextReveal>

export const Default: Story = {}
