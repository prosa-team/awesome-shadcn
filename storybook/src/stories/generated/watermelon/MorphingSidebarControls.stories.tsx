/**
 * Interaction | A sidebar carries progressive settings and presets, changing shape as options are revealed.
 *
 * **Registry:** Watermelon UI — `@watermelon/morphing-sidebar-controls` ([docs](https://ui.watermelon.sh/animated-components/morphing-sidebar-controls))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import MorphingSidebarControls from '@/registries/watermelon/components/ui/morphing-sidebar-controls'

const meta: Meta<typeof MorphingSidebarControls> = {
  title: 'Watermelon UI/Morphing Sidebar Controls',
  component: MorphingSidebarControls,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MorphingSidebarControls>

export const Default: Story = {}
