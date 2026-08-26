/**
 * 16 variants — pick a disclosure style that matches the page rather than restyling the stock one.
 *
 * **Registry:** Watermelon UI — `@watermelon/accordion` ([docs](https://ui.watermelon.sh/components/accordion))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@/registries/watermelon/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Watermelon UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}
