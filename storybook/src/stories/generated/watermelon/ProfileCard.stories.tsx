/**
 * Cards | A compact identity card with quick actions, for directories and member lists.
 *
 * **Registry:** Watermelon UI — `@watermelon/profile-card` ([docs](https://ui.watermelon.sh/animated-components/profile-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProfileCard } from '@/registries/watermelon/components/ui/profile-card'

const meta: Meta<typeof ProfileCard> = {
  title: 'Watermelon UI/Profile Card',
  component: ProfileCard,
  tags: ['autodocs'],
  args: {
    name: "Registry component",
    website: "Sample",
    visits: "Sample",
    heatScore: 1,
    location: "Sample",
    categories: ["Sample", "Sample 2", "Sample 3"],
    employees: "Sample",
    arr: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Default: Story = {}
