/**
 * A long vertical nav where the active item must stay findable — its marker extends and it scrolls itself into view on mount.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/line-nav` ([docs](https://chanhdai.com/components/line-nav))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LineNav } from '@/registries/ncdai/line-nav'

const meta: Meta<typeof LineNav> = {
  title: 'Chánh Đại Components/Line Nav',
  component: LineNav,
  tags: ['autodocs'],
  args: {
    items: [{ title: "Registry component", href: "https://ui.shadcn.com" }, { title: "Registry component 2", href: "https://ui.shadcn.com 2" }, { title: "Registry component 3", href: "https://ui.shadcn.com 3" }],
  },
}

export default meta
type Story = StoryObj<typeof LineNav>

export const Default: Story = {}
