/**
 * A message belongs to a region of the page and must stay visible, unlike a toast that disappears.
 *
 * **Registry:** ReUI — `@reui/alert` ([docs](https://reui.io/components/alert))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert } from '@/registries/reui/components/reui/alert'

const meta: Meta<typeof Alert> = {
  title: 'ReUI/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {}
