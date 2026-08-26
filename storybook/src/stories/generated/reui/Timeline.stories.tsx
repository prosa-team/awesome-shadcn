/**
 * Order in time is the information: deploys, audit logs, activity feeds.
 *
 * **Registry:** ReUI — `@reui/timeline` ([docs](https://reui.io/components/timeline))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Timeline } from '@/registries/reui/components/reui/timeline'

const meta: Meta<typeof Timeline> = {
  title: 'ReUI/Timeline',
  component: Timeline,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Timeline>

export const Default: Story = {}
