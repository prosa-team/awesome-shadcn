/**
 * Dialog | A wallet or swap surface where expandable cards carry the flow — a proven crypto pattern.
 *
 * **Registry:** Watermelon UI — `@watermelon/uniswap-dialog` ([docs](https://ui.watermelon.sh/animated-components/uniswap-dialog))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { UniSwapDialog } from '@/registries/watermelon/components/ui/uniswap-dialog'

const meta: Meta<typeof UniSwapDialog> = {
  title: 'Watermelon UI/Uniswap Dialog',
  component: UniSwapDialog,
  tags: ['autodocs'],
  args: {
    value: { name: "Registry component", code: "The quick brown fox jumps over the lazy dog." },
  },
}

export default meta
type Story = StoryObj<typeof UniSwapDialog>

export const Default: Story = {}
