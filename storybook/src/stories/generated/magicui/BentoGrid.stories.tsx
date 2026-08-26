/**
 * Features differ in weight and a uniform three-column grid would flatten them into equals.
 *
 * **Registry:** Magic UI — `@magicui/bento-grid` ([docs](https://magicui.design/docs/components/bento-grid))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BentoGrid } from '@/registries/magicui/ui/bento-grid'

const meta: Meta<typeof BentoGrid> = {
  title: 'Magic UI/Bento Grid',
  component: BentoGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BentoGrid>

export const Default: Story = {}
