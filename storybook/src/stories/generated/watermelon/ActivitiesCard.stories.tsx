/**
 * Disclosure | An activity summary expands to the full list, with a 3D header that keeps the summary anchored.
 *
 * **Registry:** Watermelon UI — `@watermelon/activities-card` ([docs](https://ui.watermelon.sh/animated-components/activities-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActivitiesCard } from '@/registries/watermelon/components/ui/activities-card'

const meta: Meta<typeof ActivitiesCard> = {
  title: 'Watermelon UI/Activities Card',
  component: ActivitiesCard,
  tags: ['autodocs'],
  args: {
    headerIcon: "Sample",
    title: "Registry component",
    subtitle: "One line about what it does.",
    activities: [{ icon: "Sample", title: "Registry component", desc: "Sample", time: "Sample" }, { icon: "Sample 2", title: "Registry component 2", desc: "Sample 2", time: "Sample 2" }, { icon: "Sample 3", title: "Registry component 3", desc: "Sample 3", time: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof ActivitiesCard>

export const Default: Story = {}
