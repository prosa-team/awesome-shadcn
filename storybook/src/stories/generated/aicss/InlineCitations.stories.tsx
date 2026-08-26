/**
 * The answer makes factual claims and each one needs an attributable source at the exact sentence, not a link dump at the end.
 *
 * **Registry:** AICSS — `@aicss/inline-citations` ([docs](https://www.aicss.dev/components/inline-citations))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineCitations } from '@/registries/aicss/InlineCitations'

const meta: Meta<typeof InlineCitations> = {
  title: 'AICSS/Inline Citations',
  component: InlineCitations,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InlineCitations>

export const Default: Story = {}
