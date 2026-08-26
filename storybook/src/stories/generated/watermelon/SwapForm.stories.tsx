/**
 * Interaction | Sign in and sign up share one surface, and switching must not feel like a page reload.
 *
 * **Registry:** Watermelon UI — `@watermelon/swap-form` ([docs](https://ui.watermelon.sh/animated-components/swap-form))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SwapForm } from '@/registries/watermelon/components/ui/swap-form'

const meta: Meta<typeof SwapForm> = {
  title: 'Watermelon UI/Swap Form',
  component: SwapForm,
  tags: ['autodocs'],
  args: {
    isSignIn: true,
  },
}

export default meta
type Story = StoryObj<typeof SwapForm>

export const Default: Story = {}
