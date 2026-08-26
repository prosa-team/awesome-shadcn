/**
 * Inputs | A signature is captured by hand, with a step-based workflow rather than a bare canvas.
 *
 * **Registry:** Watermelon UI — `@watermelon/draw-signature` ([docs](https://ui.watermelon.sh/animated-components/draw-signature))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DrawSignatureComponent } from '@/registries/watermelon/components/ui/draw-signature'

const meta: Meta<typeof DrawSignatureComponent> = {
  title: 'Watermelon UI/Draw Signature',
  component: DrawSignatureComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DrawSignatureComponent>

export const Default: Story = {}
