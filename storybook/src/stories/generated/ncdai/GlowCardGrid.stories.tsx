/**
 * A feature grid where hovering one card should light its border and leave neighbours calm.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/glow-card-grid` ([docs](https://chanhdai.com/components/glow-card-grid))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GlowCardGrid } from '@/registries/ncdai/glow-card-grid'

const meta: Meta<typeof GlowCardGrid> = {
  title: 'Chánh Đại Components/Glow Card Grid',
  component: GlowCardGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GlowCardGrid>

export const Default: Story = {}
