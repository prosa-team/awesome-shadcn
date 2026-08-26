/**
 * Sections open and close often enough that a jumpy height transition becomes the thing users notice.
 *
 * **Registry:** Fluid Functionalism — `@fluid/accordion` ([docs](https://www.fluidfunctionalism.com/docs/accordion))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@/registries/fluid/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Fluid Functionalism/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}
