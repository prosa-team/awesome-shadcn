/**
 * You need the whole document-agent shell — viewer, sidebar, extraction panel — arranged and wired.
 *
 * **Registry:** Extend UI — `@extend/layout-blocks` ([docs](https://ui.extend.ai/ui/blocks#layout-blocks))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OcrBlocksPanel } from '@/registries/extend/extend/layout-blocks'

const meta: Meta<typeof OcrBlocksPanel> = {
  title: 'Extend UI/Layout Blocks',
  component: OcrBlocksPanel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OcrBlocksPanel>

export const Default: Story = {}
