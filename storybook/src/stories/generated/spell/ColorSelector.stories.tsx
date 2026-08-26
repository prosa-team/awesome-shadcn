/**
 * The page demonstrates theming or product variants and visitors should try colours live.
 *
 * **Registry:** Spell UI — `@spell/color-selector` ([docs](https://spell.sh/docs/color-selector))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorSelector } from '@/registries/spell/color-selector'

const meta: Meta<typeof ColorSelector> = {
  title: 'Spell UI/Color Selector',
  component: ColorSelector,
  tags: ['autodocs'],
  args: {
    colors: ["Sample", "Sample 2", "Sample 3"],
    defaultValue: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof ColorSelector>

export const Default: Story = {}
