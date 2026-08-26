/**
 * A sort control or select trigger where the icon should morph between up and down instead of swapping frames.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/chevrons-up-down-icon` ([docs](https://chanhdai.com/components/chevrons-up-down-icon))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ChevronsUpDownIcon } from '@/registries/ncdai/chevrons-up-down-icon'

const meta: Meta<typeof ChevronsUpDownIcon> = {
  title: 'Chánh Đại Components/Chevrons Up Down Icon',
  component: ChevronsUpDownIcon,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ChevronsUpDownIcon>

export const Default: Story = {}
