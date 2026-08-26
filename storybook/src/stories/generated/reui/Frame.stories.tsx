/**
 * You render a preview of the user's own content or an embedded app and need it isolated in a frame.
 *
 * **Registry:** ReUI — `@reui/frame` ([docs](https://reui.io/components/frame))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Frame } from '@/registries/reui/components/reui/frame'

const meta: Meta<typeof Frame> = {
  title: 'ReUI/Frame',
  component: Frame,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Frame>

export const Default: Story = {}
