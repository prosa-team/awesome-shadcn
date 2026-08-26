/**
 * Cards | The user should model an outcome themselves — inputs and instant results beat a static claim.
 *
 * **Registry:** Watermelon UI — `@watermelon/returns-calculator-snippet` ([docs](https://ui.watermelon.sh/animated-components/returns-calculator-snippet))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ReturnsCalculator } from '@/registries/watermelon/components/ui/returns-calculator-snippet'

const meta: Meta<typeof ReturnsCalculator> = {
  title: 'Watermelon UI/Returns Calculator Snippet',
  component: ReturnsCalculator,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ReturnsCalculator>

export const Default: Story = {}
