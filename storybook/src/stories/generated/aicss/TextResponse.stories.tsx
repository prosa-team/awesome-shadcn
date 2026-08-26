/**
 * The finished, non-streamed reply: markdown, bold, inline code, sane spacing. The default block every other one falls back to.
 *
 * **Registry:** AICSS — `@aicss/text-response` ([docs](https://www.aicss.dev/components/text-response))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextResponse } from '@/registries/aicss/TextResponse'

const meta: Meta<typeof TextResponse> = {
  title: 'AICSS/Text Response',
  component: TextResponse,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextResponse>

export const Default: Story = {}
