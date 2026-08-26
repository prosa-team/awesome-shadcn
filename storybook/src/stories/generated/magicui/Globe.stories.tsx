/**
 * An interactive globe with markers, when the claim is worldwide reach and a flat map undersells it.
 *
 * **Registry:** Magic UI — `@magicui/globe` ([docs](https://magicui.design/docs/components/globe))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Globe } from '@/registries/magicui/ui/globe'

const meta: Meta<typeof Globe> = {
  title: 'Magic UI/Globe',
  component: Globe,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Globe>

export const Default: Story = {}
