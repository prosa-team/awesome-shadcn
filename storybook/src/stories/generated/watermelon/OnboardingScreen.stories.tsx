/**
 * Cards | First run needs a guided screen that explains setup visually rather than as a form.
 *
 * **Registry:** Watermelon UI — `@watermelon/onboarding-screen` ([docs](https://ui.watermelon.sh/animated-components/onboarding-screen))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { OnboardingScreen } from '@/registries/watermelon/components/ui/onboarding-screen'

const meta: Meta<typeof OnboardingScreen> = {
  title: 'Watermelon UI/Onboarding Screen',
  component: OnboardingScreen,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OnboardingScreen>

export const Default: Story = {}
