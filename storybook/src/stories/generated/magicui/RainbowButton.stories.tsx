/**
 * The primary button carries the brand's colour range, when a single accent colour looks too plain.
 *
 * **Registry:** Magic UI — `@magicui/rainbow-button` ([docs](https://magicui.design/docs/components/rainbow-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RainbowButton } from '@/registries/magicui/ui/rainbow-button'

const meta: Meta<typeof RainbowButton> = {
  title: 'Magic UI/Rainbow Button',
  component: RainbowButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RainbowButton>

export const Default: Story = {}
