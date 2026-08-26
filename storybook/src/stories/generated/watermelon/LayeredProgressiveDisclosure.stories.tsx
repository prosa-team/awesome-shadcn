/**
 * Interaction | Advanced configuration must not overwhelm on first sight, but power users still need every toggle.
 *
 * **Registry:** Watermelon UI — `@watermelon/layered-progressive-disclosure` ([docs](https://ui.watermelon.sh/animated-components/layered-progressive-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import LayeredProgressiveDisclosure from '@/registries/watermelon/components/ui/layered-progressive-disclosure'

const meta: Meta<typeof LayeredProgressiveDisclosure> = {
  title: 'Watermelon UI/Layered Progressive Disclosure',
  component: LayeredProgressiveDisclosure,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LayeredProgressiveDisclosure>

export const Default: Story = {}
