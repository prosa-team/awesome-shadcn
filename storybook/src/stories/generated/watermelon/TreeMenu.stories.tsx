/**
 * Navigation | Nested navigation where drilling in should animate levels and leave a breadcrumb back.
 *
 * **Registry:** Watermelon UI — `@watermelon/tree-menu` ([docs](https://ui.watermelon.sh/animated-components/tree-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TreeMenu } from '@/registries/watermelon/components/ui/tree-menu'

const meta: Meta<typeof TreeMenu> = {
  title: 'Watermelon UI/Tree Menu',
  component: TreeMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TreeMenu>

export const Default: Story = {}
