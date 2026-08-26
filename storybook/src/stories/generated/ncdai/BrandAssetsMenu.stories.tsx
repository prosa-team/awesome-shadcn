/**
 * Press and partners keep asking for your logo files. Right-click the mark, copy the SVG, or jump to the brand guidelines.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/brand-assets-menu` ([docs](https://chanhdai.com/components/brand-assets-menu))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BrandAssetsMenu } from '@/registries/ncdai/brand-assets-menu'

const meta: Meta<typeof BrandAssetsMenu> = {
  title: 'Chánh Đại Components/Brand Assets Menu',
  component: BrandAssetsMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BrandAssetsMenu>

export const Default: Story = {}
