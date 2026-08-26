/**
 * File paths, wallet addresses, or hashes where the tail identifies the item, so trailing `…` would destroy the information.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/middle-truncation` ([docs](https://chanhdai.com/components/middle-truncation))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MiddleTruncation } from '@/registries/ncdai/middle-truncation'

const meta: Meta<typeof MiddleTruncation> = {
  title: 'Chánh Đại Components/Middle Truncation',
  component: MiddleTruncation,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MiddleTruncation>

export const Default: Story = {}
