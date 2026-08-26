/**
 * Intake is document-heavy: many files, real formats, per-file progress and errors.
 *
 * **Registry:** Extend UI — `@extend/file-upload` ([docs](https://ui.extend.ai/ui/docs/components/file-upload))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileUpload } from '@/registries/extend/extend/file-upload'

const meta: Meta<typeof FileUpload> = {
  title: 'Extend UI/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {}
