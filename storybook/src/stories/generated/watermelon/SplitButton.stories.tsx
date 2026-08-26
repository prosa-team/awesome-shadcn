/**
 * Buttons | A default action plus alternates, where the expansion should feel like one control widening.
 *
 * **Registry:** Watermelon UI — `@watermelon/split-button` ([docs](https://ui.watermelon.sh/animated-components/split-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import SplitButton from '@/registries/watermelon/components/ui/split-button'

const meta: Meta<typeof SplitButton> = {
  title: 'Watermelon UI/Split Button',
  component: SplitButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SplitButton>

export const Default: Story = {}
