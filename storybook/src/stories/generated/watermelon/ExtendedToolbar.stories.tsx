/**
 * Micro-interaction | A toolbar reveals contextual actions for the current selection and confirms each one instantly.
 *
 * **Registry:** Watermelon UI — `@watermelon/extended-toolbar` ([docs](https://ui.watermelon.sh/animated-components/extended-toolbar))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ExtendedToolbar } from '@/registries/watermelon/components/ui/extended-toolbar'

const meta: Meta<typeof ExtendedToolbar> = {
  title: 'Watermelon UI/Extended Toolbar',
  component: ExtendedToolbar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExtendedToolbar>

export const Default: Story = {}
