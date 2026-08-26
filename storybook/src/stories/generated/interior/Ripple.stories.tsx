/**
 * You need pointer-origin touch feedback on tap targets.
 *
 * **Registry:** interior.dev — `@interior/ripple` ([docs](https://interior.dev/docs/ripple))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Ripple } from '@/registries/interior/components/interior/ripple'

const meta: Meta<typeof Ripple> = {
  title: 'interior.dev/Ripple',
  component: Ripple,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Ripple>

export const Default: Story = {}
