/**
 * A document flow ends in a signature and a third-party signing vendor would be too much machinery.
 *
 * **Registry:** Extend UI — `@extend/e-signature` ([docs](https://ui.extend.ai/ui/docs/components/e-signature))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ESignatureBlock } from '@/registries/extend/blocks/e-signature'

const meta: Meta<typeof ESignatureBlock> = {
  title: 'Extend UI/E-Signature',
  component: ESignatureBlock,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ESignatureBlock>

export const Default: Story = {}
