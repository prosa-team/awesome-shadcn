/**
 * You need a progress bar that moves from indeterminate to determinate cleanly.
 *
 * **Registry:** interior.dev — `@interior/progress-bar` ([docs](https://interior.dev/docs/progress-bar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressBar } from '@/registries/interior/components/interior/progress-bar'

const meta: Meta<typeof ProgressBar> = {
  title: 'interior.dev/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {}
