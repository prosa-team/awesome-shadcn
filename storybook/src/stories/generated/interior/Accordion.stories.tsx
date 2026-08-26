/**
 * You need an accordion with height-auto animation done correctly.
 *
 * **Registry:** interior.dev — `@interior/accordion` ([docs](https://interior.dev/docs/accordion))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@/registries/interior/components/interior/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'interior.dev/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}
