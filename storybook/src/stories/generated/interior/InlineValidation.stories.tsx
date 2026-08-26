/**
 * You need inline form error messages that don't shove the layout around.
 *
 * **Registry:** interior.dev — `@interior/inline-validation` ([docs](https://interior.dev/docs/inline-validation))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineValidation } from '@/registries/interior/components/interior/inline-validation'

const meta: Meta<typeof InlineValidation> = {
  title: 'interior.dev/Inline Validation',
  component: InlineValidation,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InlineValidation>

export const Default: Story = {}
