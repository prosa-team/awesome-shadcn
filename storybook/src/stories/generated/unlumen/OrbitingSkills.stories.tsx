/**
 * A CV or about page shows a tool set, and a logo cluster in orbit beats a list of badges.
 *
 * **Registry:** Unlumen UI — `@unlumen/orbiting-skills` ([docs](https://ui.unlumen.com/docs/ui/unlumen/orbiting-skills))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OrbitingSkills } from '@/registries/unlumen/components/unlumen-ui/orbiting-skills'

const meta: Meta<typeof OrbitingSkills> = {
  title: 'Unlumen UI/Orbiting Skills',
  component: OrbitingSkills,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OrbitingSkills>

export const Default: Story = {}
