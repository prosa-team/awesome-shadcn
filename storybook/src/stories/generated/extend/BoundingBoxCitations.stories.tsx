/**
 * Every extracted value must point back to the exact place on the page — the difference between an audit trail and a guess.
 *
 * **Registry:** Extend UI — `@extend/bounding-box-citations` ([docs](https://ui.extend.ai/ui/docs/components/bounding-box-citations))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HumanReviewHighlight } from '@/registries/extend/extend/bounding-box-citations'

const meta: Meta<typeof HumanReviewHighlight> = {
  title: 'Extend UI/Bounding Box Citations',
  component: HumanReviewHighlight,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HumanReviewHighlight>

export const Default: Story = {}
