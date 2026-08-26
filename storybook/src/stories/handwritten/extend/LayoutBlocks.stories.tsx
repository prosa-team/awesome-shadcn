import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  ATTENTION_OCR_OUTPUT,
  OcrBlocksPanel,
  getOcrBlocks,
} from '@/registries/extend/extend/layout-blocks'

const BLOCKS = getOcrBlocks(ATTENTION_OCR_OUTPUT)

/**
 * The OCR block list: every region a document parser found, in reading order.
 *
 * **Registry:** Extend UI — `@extend/layout-blocks`
 * ([docs](https://ui.extend.ai/ui/blocks#layout-blocks))
 *
 * The registry ships `ATTENTION_OCR_OUTPUT` — the parse of a real paper — and
 * `getOcrBlocks` to turn it into the panel's shape. The full block also draws
 * these regions over the rendered PDF, which needs a document this Storybook
 * does not carry; the panel is the half that stands alone.
 */
const meta: Meta<typeof OcrBlocksPanel> = {
  title: 'Extend UI/Layout Blocks',
  component: OcrBlocksPanel,
  tags: ['autodocs'],
  args: { blocks: BLOCKS },
  render: (args) => (
    <div className="h-[32rem] w-[28rem] max-w-full">
      <OcrBlocksPanel {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof OcrBlocksPanel>

/** Every block the parser found. */
export const Default: Story = {}

/** A block focused, as it is when the reader clicks its region in the document. */
export const BlockFocused: Story = { args: { activeBlockId: BLOCKS[3]?.id } }

/** A short document, where the panel does not need to scroll. */
export const FewBlocks: Story = { args: { blocks: BLOCKS.slice(0, 4) } }
