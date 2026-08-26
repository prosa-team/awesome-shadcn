/**
 * Long-form docs where a full table of contents costs too much width but the reader still needs position and jump targets.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/toc-minimap` ([docs](https://chanhdai.com/components/toc-minimap))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TOCMinimap } from '@/registries/ncdai/toc-minimap'

const meta: Meta<typeof TOCMinimap> = {
  title: 'Chánh Đại Components/TOC Minimap',
  component: TOCMinimap,
  tags: ['autodocs'],
  args: {
    items: [{ title: "Registry component", url: "https://ui.shadcn.com", depth: 1 }, { title: "Registry component 2", url: "https://ui.shadcn.com 2", depth: 2 }, { title: "Registry component 3", url: "https://ui.shadcn.com 3", depth: 3 }],
  },
}

export default meta
type Story = StoryObj<typeof TOCMinimap>

export const Default: Story = {}
