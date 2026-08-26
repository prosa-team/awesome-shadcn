/**
 * Cards | A profile expands into a side-by-side detail view, keeping the list visible beside it.
 *
 * **Registry:** Watermelon UI — `@watermelon/expandable-profile-card` ([docs](https://ui.watermelon.sh/animated-components/expandable-profile-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import ExpandableProfileCard from '@/registries/watermelon/components/ui/expandable-profile-card'

const meta: Meta<typeof ExpandableProfileCard> = {
  title: 'Watermelon UI/Expandable Profile Card',
  component: ExpandableProfileCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExpandableProfileCard>

export const Default: Story = {}
