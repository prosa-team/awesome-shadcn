/**
 * Buttons | A button expands into its own input or panel instead of opening a detached surface.
 *
 * **Registry:** Watermelon UI — `@watermelon/morphing-button` ([docs](https://ui.watermelon.sh/animated-components/morphing-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MorphingButton } from '@/registries/watermelon/components/ui/morphing-button'

const meta: Meta<typeof MorphingButton> = {
  title: 'Watermelon UI/Morphing Button',
  component: MorphingButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MorphingButton>

export const Default: Story = {}
