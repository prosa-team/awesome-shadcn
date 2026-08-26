/**
 * 14 variants — action menus with different grouping and icon styles.
 *
 * **Registry:** Watermelon UI — `@watermelon/dropdown-menu` ([docs](https://ui.watermelon.sh/components/dropdown-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DropdownMenu } from '@/registries/watermelon/components/ui/dropdown-menu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Watermelon UI/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {}
