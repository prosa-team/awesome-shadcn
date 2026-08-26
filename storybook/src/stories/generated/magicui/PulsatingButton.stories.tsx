/**
 * One call to action must be found without reading — waitlist, live event, limited offer.
 *
 * **Registry:** Magic UI — `@magicui/pulsating-button` ([docs](https://magicui.design/docs/components/pulsating-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PulsatingButton } from '@/registries/magicui/ui/pulsating-button'

const meta: Meta<typeof PulsatingButton> = {
  title: 'Magic UI/Pulsating Button',
  component: PulsatingButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PulsatingButton>

export const Default: Story = {}
