/**
 * An article or product page where sharing must cover copy-link, X, LinkedIn, and the native share sheet in one control.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/share-menu` ([docs](https://chanhdai.com/components/share-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShareMenu } from '@/registries/ncdai/share-menu'

const meta: Meta<typeof ShareMenu> = {
  title: 'Chánh Đại Components/Share Menu',
  component: ShareMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShareMenu>

export const Default: Story = {}
