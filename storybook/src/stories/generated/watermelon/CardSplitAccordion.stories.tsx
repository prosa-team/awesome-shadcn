/**
 * Accordion | A card must reveal detail by splitting open, when a normal accordion below it would break the card's shape.
 *
 * **Registry:** Watermelon UI — `@watermelon/card-split-accordion` ([docs](https://ui.watermelon.sh/animated-components/card-split-accordian))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AccordionApp } from '@/registries/watermelon/components/ui/card-split-accordion'

const meta: Meta<typeof AccordionApp> = {
  title: 'Watermelon UI/Card Split Accordian',
  component: AccordionApp,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AccordionApp>

export const Default: Story = {}
