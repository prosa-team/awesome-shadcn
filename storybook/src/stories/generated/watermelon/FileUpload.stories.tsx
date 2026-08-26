/**
 * 5 blocks — upload sections; for real document workflows see [Extend UI](#extend-ui).
 *
 * **Registry:** Watermelon UI — `@watermelon/file-upload` ([docs](https://ui.watermelon.sh/blocks/file-upload))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import FileUpload from '@/registries/watermelon/components/ui/file-upload'

const meta: Meta<typeof FileUpload> = {
  title: 'Watermelon UI/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {}
