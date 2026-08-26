/**
 * The agent edited code and the user must approve or audit the exact lines — inline `+`/`-` with the surrounding context, not a prose summary.
 *
 * **Registry:** AICSS — `@aicss/file-diff` ([docs](https://www.aicss.dev/components/file-diff))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileDiff } from '@/registries/aicss/FileDiff'

const meta: Meta<typeof FileDiff> = {
  title: 'AICSS/File Diff',
  component: FileDiff,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileDiff>

export const Default: Story = {}
