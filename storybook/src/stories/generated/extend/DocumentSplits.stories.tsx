/**
 * One scanned batch holds many logical documents and a human must confirm where each one starts.
 *
 * **Registry:** Extend UI — `@extend/document-splits` ([docs](https://ui.extend.ai/ui/docs/components/document-splits))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocumentSplits } from '@/registries/extend/extend/document-splits'

const meta: Meta<typeof DocumentSplits> = {
  title: 'Extend UI/Document Splits',
  component: DocumentSplits,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocumentSplits>

export const Default: Story = {}
