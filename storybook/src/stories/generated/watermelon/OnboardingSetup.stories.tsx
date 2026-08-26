/**
 * Cards | Initial configuration has real choices to make, and they should be sequenced rather than dumped.
 *
 * **Registry:** Watermelon UI — `@watermelon/onboarding-setup` ([docs](https://ui.watermelon.sh/animated-components/onboarding-setup))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OnboardingSetup } from '@/registries/watermelon/components/ui/onboarding-setup'

const meta: Meta<typeof OnboardingSetup> = {
  title: 'Watermelon UI/Onboarding Setup',
  component: OnboardingSetup,
  tags: ['autodocs'],
  args: {
    title: "Registry component",
    subtitle: "One line about what it does.",
    focusOptions: [{ id: "item-1", label: "Registry component" }, { id: "item-1 2", label: "Registry component 2" }, { id: "item-1 3", label: "Registry component 3" }],
    selectedFocus: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof OnboardingSetup>

export const Default: Story = {}
