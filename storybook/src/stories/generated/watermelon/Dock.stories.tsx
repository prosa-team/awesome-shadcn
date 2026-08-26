/**
 * Micro-interaction | An icon bar should magnify under the cursor, macOS-style, making small targets hittable.
 *
 * **Registry:** Watermelon UI — `@watermelon/dock` ([docs](https://ui.watermelon.sh/animated-components/dock))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dock } from '@/registries/watermelon/components/ui/dock'

const meta: Meta<typeof Dock> = {
  title: 'Watermelon UI/Dock Component',
  component: Dock,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dock>

export const Default: Story = {}
