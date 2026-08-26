/**
 * A canvas background of shifting glyphs, for a developer or security product where "data moving" is the mood.
 *
 * **Registry:** Magic UI — `@magicui/glyph-matrix` ([docs](https://magicui.design/docs/components/glyph-matrix))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GlyphMatrix } from '@/registries/magicui/ui/glyph-matrix'

const meta: Meta<typeof GlyphMatrix> = {
  title: 'Magic UI/Glyph Matrix',
  component: GlyphMatrix,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GlyphMatrix>

export const Default: Story = {}
