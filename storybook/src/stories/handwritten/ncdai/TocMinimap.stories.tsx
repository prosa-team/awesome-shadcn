import type { Meta, StoryObj } from '@storybook/react-vite'

import { TOCMinimap } from '@/registries/ncdai/toc-minimap'
import type { TOCItemType } from '@/registries/ncdai/toc-minimap'

const ITEMS: TOCItemType[] = [
  { title: 'Overview', url: '#overview', depth: 2 },
  { title: 'Installing a registry', url: '#installing', depth: 2 },
  { title: 'components.json', url: '#components-json', depth: 3 },
  { title: 'Namespaces', url: '#namespaces', depth: 3 },
  { title: 'Generating stories', url: '#generating', depth: 2 },
  { title: 'Sample props', url: '#sample-props', depth: 3 },
  { title: 'Smoke testing', url: '#smoke-testing', depth: 2 },
]

/**
 * A table of contents compressed to a column of rules, expanding on hover.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/toc-minimap`
 * ([docs](https://chanhdai.com/components/toc-minimap))
 *
 * `depth` is what gives each rule its indent, so a sample with one depth
 * renders a minimap with no hierarchy to read.
 */
const meta: Meta<typeof TOCMinimap> = {
  title: 'Chánh Đại Components/TOC Minimap',
  component: TOCMinimap,
  tags: ['autodocs'],
  args: { items: ITEMS },
}

export default meta
type Story = StoryObj<typeof TOCMinimap>

/** Two heading levels, the usual docs shape. */
export const Default: Story = {}

/** One level only — the minimap degrades to an even stack of rules. */
export const FlatOutline: Story = {
  args: { items: ITEMS.filter((item) => item.depth === 2) },
}

/** A long document, where the minimap earns its place over a full list. */
export const LongDocument: Story = {
  args: {
    items: Array.from({ length: 24 }, (_, i) => ({
      title: `Section ${i + 1}`,
      url: `#section-${i + 1}`,
      depth: i % 3 === 0 ? 2 : 3,
    })),
  },
}
