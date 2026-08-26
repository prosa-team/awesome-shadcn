/**
 * Same job, rotating-bars look, when a circular spinner reads too generic.
 *
 * **Registry:** Spell UI — `@spell/bars-spinner` ([docs](https://spell.sh/docs/bars-spinner))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BarsSpinner } from '@/registries/spell/bars-spinner'

const meta: Meta<typeof BarsSpinner> = {
  title: 'Spell UI/Bars Spinner',
  component: BarsSpinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BarsSpinner>

export const Default: Story = {}
