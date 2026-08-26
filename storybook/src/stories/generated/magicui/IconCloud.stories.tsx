/**
 * You support dozens of integrations and a rotating sphere of logos shows the breadth a list would bury.
 *
 * **Registry:** Magic UI — `@magicui/icon-cloud` ([docs](https://magicui.design/docs/components/icon-cloud))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconCloud } from '@/registries/magicui/ui/icon-cloud'

const meta: Meta<typeof IconCloud> = {
  title: 'Magic UI/Icon Cloud',
  component: IconCloud,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconCloud>

export const Default: Story = {}
