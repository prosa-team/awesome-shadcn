/**
 * You need a multi-step wizard whose transitions know forward from back.
 *
 * **Registry:** interior.dev — `@interior/wizard-steps` ([docs](https://interior.dev/docs/wizard-steps))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WizardSteps } from '@/registries/interior/components/interior/wizard-steps'

const meta: Meta<typeof WizardSteps> = {
  title: 'interior.dev/Wizard Steps',
  component: WizardSteps,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WizardSteps>

export const Default: Story = {}
