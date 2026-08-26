/**
 * You claim global coverage and need a lightweight SVG world map instead of a mapping library.
 *
 * **Registry:** Magic UI — `@magicui/dotted-map` ([docs](https://magicui.design/docs/components/dotted-map))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DottedMap } from '@/registries/magicui/ui/dotted-map'

const meta: Meta<typeof DottedMap> = {
  title: 'Magic UI/Dotted Map',
  component: DottedMap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DottedMap>

export const Default: Story = {}
