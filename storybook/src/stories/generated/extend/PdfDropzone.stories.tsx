/**
 * A focused single-purpose screen: drop a PDF, see it, act on it. Good first screen of a document product.
 *
 * **Registry:** Extend UI — `@extend/pdf-dropzone` ([docs](https://ui.extend.ai/ui/blocks#pdf-dropzone))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PdfDropzoneBlock } from '@/registries/extend/blocks/pdf-dropzone'

const meta: Meta<typeof PdfDropzoneBlock> = {
  title: 'Extend UI/PDF Dropzone',
  component: PdfDropzoneBlock,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PdfDropzoneBlock>

export const Default: Story = {}
