/**
 * A background with more structure than dots, for a technical or scientific feel.
 *
 * **Registry:** Magic UI — `@magicui/hexagon-pattern` ([docs](https://magicui.design/docs/components/hexagon-pattern))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HexagonPattern } from '@/registries/magicui/ui/hexagon-pattern'

const meta: Meta<typeof HexagonPattern> = {
  title: 'Magic UI/Hexagon Pattern',
  component: HexagonPattern,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HexagonPattern>

export const Default: Story = {}
