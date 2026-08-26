/**
 * A button should show where it was clicked, Material-style, on touch-heavy surfaces.
 *
 * **Registry:** Magic UI — `@magicui/ripple-button` ([docs](https://magicui.design/docs/components/ripple-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RippleButton } from '@/registries/magicui/ui/ripple-button'

const meta: Meta<typeof RippleButton> = {
  title: 'Magic UI/Ripple Button',
  component: RippleButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RippleButton>

export const Default: Story = {}
