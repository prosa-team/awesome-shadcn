/**
 * An agent or wizard must ask a real question mid-flow: preset options, a skip path, and a free-text answer, without a modal.
 *
 * **Registry:** Fluid Functionalism — `@fluid/ask-user-questions` ([docs](https://www.fluidfunctionalism.com/docs/ask-user-questions))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AskUserQuestions } from '@/registries/fluid/ui/ask-user-questions'

const meta: Meta<typeof AskUserQuestions> = {
  title: 'Fluid Functionalism/AskUserQuestions',
  component: AskUserQuestions,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AskUserQuestions>

export const Default: Story = {}
