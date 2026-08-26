/**
 * Cards | Activation depends on finishing several steps, and visible progress is what drives completion.
 *
 * **Registry:** Watermelon UI — `@watermelon/onboarding-checklist` ([docs](https://ui.watermelon.sh/animated-components/onboarding-checklist))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OnboardingChecklist } from '@/registries/watermelon/components/ui/onboarding-checklist'

const meta: Meta<typeof OnboardingChecklist> = {
  title: 'Watermelon UI/Onboarding Checklist',
  component: OnboardingChecklist,
  tags: ['autodocs'],
  args: {
    steps: [{ id: 1, title: "Registry component", isCompleted: true }, { id: 2, title: "Registry component 2", isCompleted: false }, { id: 3, title: "Registry component 3", isCompleted: false }],
  },
}

export default meta
type Story = StoryObj<typeof OnboardingChecklist>

export const Default: Story = {}
