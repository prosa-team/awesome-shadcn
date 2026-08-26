import type { Meta, StoryObj } from '@storybook/react-vite'

import { ESignatureBlock } from '@/registries/extend/blocks/e-signature'

/**
 * The whole signing screen: the document, the signer fields, and the confirmation.
 *
 * **Registry:** Extend UI — `@extend/e-signature`
 * ([docs](https://ui.extend.ai/ui/blocks#e-signature))
 *
 * A block rather than a component — it composes the PDF viewer, the field
 * overlay, and the signature capture into the screen a signer actually sees.
 * `file` points at the document; without one it shows its own empty state.
 */
const meta: Meta<typeof ESignatureBlock> = {
  title: 'Extend UI/E-Signature Block',
  component: ESignatureBlock,
  tags: ['autodocs'],
  render: (args) => (
    <div className="h-[36rem] w-[56rem] max-w-full">
      <ESignatureBlock {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof ESignatureBlock>

/** No document loaded, which is where the flow starts. */
export const Default: Story = {}
